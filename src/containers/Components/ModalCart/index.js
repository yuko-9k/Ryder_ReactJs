import React, { Component, Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../../HomeTemplate/DetailProduct/modules/action";
import * as act from "./modules/action";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerTelephone: null,
      customerAddress: "",
      customerEmail: "",
      cartTotal: null,
      data: [],
    };
  }

  handleOnchange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
      cartTotal: this.renderTotal(),
    });
  };

  handleSendCart = () => {
    const { listCart } = this.props;
    if (listCart) {
      let newCart = listCart.map((item) => {
        let productNew = {
          productID: item.productID,
          quantity: `${item.quantityProduct}`,
        };
        return productNew;
      });
      this.setState(
        {
          data: [...newCart],
        },
        () => {
          this.props.fetchCart(this.state, this.props.history);
        }
      );
    }
  };

  renderTotal = () => {
    const { listCart } = this.props;
    return listCart.reduce((a, b) => {
      return a + b.productPrice * b.quantityProduct;
    }, 0);
  };

  renderProduct = () => {
    const { listCart } = this.props;
    if (listCart) {
      return listCart.map((product, index, total) => {
        return (
          <Fragment key={index}>
            <div className="modal-header">
              <img src={`${product.productImg}`} alt="" />
              <h3>{product.productName}</h3>
              <p>{new Intl.NumberFormat().format(product.productPrice)}</p>
              <div className="quantity d-flex align-items-center">
                <div className="quantityNumber mr-5">
                  <button
                    className="valueNumber"
                    onClick={() => {
                      this.props.setValueQuantity(product, true);
                    }}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={product.quantityProduct}
                    disabled
                  />
                  <button
                    className="valueNumber"
                    onClick={() => {
                      this.props.setValueQuantity(product, false);
                    }}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => {
                    this.props.removeProductInCart(product);
                  }}
                  className="removeProduct"
                >
                  <i className="fa fa-times-circle" />
                </button>
              </div>
            </div>
            <div className="row text-right pr-3">
              <div className="col-12">
                <p>
                  <span className="font-weight-bold mr-4">Thành tiền</span>
                  <span className="font-weight-bold mr-4">
                    {new Intl.NumberFormat().format(product.productPrice * product.quantityProduct)}
                  </span>
                </p>
              </div>
            </div>
          </Fragment>
        );
      });
    }
  };

  render() {
    return (
      <div>
        <div
          className="modal"
          id="modalCart"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-cart-wrapper">
            <div className="modal-content">
              {this.renderProduct()}
              <div className="modal-body">
                <div className="row align-items-center">
                  <div className="col-6">
                    <p>Địa chỉ giao hàng</p>
                    <p>
                      <textarea
                        name="customerAddress"
                        cols={50}
                        rows={3}
                        placeholder="Địa chỉ"
                        onChange={this.handleOnchange}
                      />
                    </p>
                    <div>
                      <p>
                        <label htmlFor="#phone">Số điện thoại</label>
                        <input
                          type="text"
                          id="phone"
                          name="customerTelephone"
                          placeholder="Số điện thoại"
                          onChange={this.handleOnchange}
                          style={{ display: "block" }}
                        ></input>
                      </p>
                      <p>
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          placeholder="Nhập địa chỉ email"
                          name="customerEmail"
                          onChange={this.handleOnchange}
                          style={{ display: "block" }}
                        ></input>
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-right">
                      <span className="font-weight-bold mr-4">
                        Tổng tiền {new Intl.NumberFormat().format(this.renderTotal())} Việt Nam đồng
                      </span>
                      <p>Phí &amp; thuế được tính khi thanh toán</p>
                      <p>
                        <NavLink to="" className="text-dark mr-4">
                          Tiếp tục mua hàng
                        </NavLink>
                        <button
                          className="btn-default"
                          onClick={this.handleSendCart}
                          type="button"
                        >
                          <p className="m-0">Xác nhận</p>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.detailProductReducer.loading,
    listCart: state.detailProductReducer.listCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setValueQuantity: (product, status) => {
      dispatch(action.actChangeValueProduct(product, status));
    },
    removeProductInCart: (product) => {
      dispatch(action.actRemoveProduct(product));
    },
    fetchCart: (data, history) => {
      dispatch(act.actSendCart(data, history));
    },
  };
};

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default withRouter(ConnectedComponent);
