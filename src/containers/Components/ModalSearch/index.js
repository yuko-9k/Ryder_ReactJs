import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as act from "./modules/action";

class ModalSearch extends Component {
  renderProduct = () => {
    let { data } = this.props;
    if (data) {
      return data.map((product) => {
        return (
          <div className="wrapperProduct" key={product.productID}>
            <div className="row">
              <div className="col-10 search-info">
                <Link to="">Sản phẩm</Link>
                <Link to="">Xem tất cả</Link>
              </div>
              <div className="col-2 search-articles">
                <Link to="">Chủ đề (2)</Link>
                <Link to="">Xem tất cả</Link>
              </div>
            </div>
            <div className="wrapperProductSearch row">
              <div className="col-10">
                <div className="searchProduct">
                  <img
                    className="productSearch"
                    src={product.productImg}
                    alt="imgProduct"
                  />
                  <div>
                    <button
                      className="btn-default"
                      onClick={() => console.log(product.productID)}
                    >
                      Chi tiết
                    </button>
                  </div>
                  <div className="caption">
                    <p>{product.productName}</p>
                    <p>${product.productPrice}</p>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="searchArticles">
                  <p>
                    <Link to="">Cửa hàng RYDER</Link>
                  </p>
                  <p>
                    <Link to="">#9</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="Search"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-search" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <input
                  className="search--textbox"
                  name="q"
                  type="text"
                  placeholder="Tìm kiếm sản phẩm"
                  autoComplete="off"
                  onChange={(e) => {
                    this.props.fecthProduct(e.target.value);
                  }}
                />
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="dataFinded">{this.renderProduct()}</div>
                ...
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
    data: state.LoadProductReducer.data,
    keyword: state.LoadProductReducer.keyword,
  };
};

const mapDisPatchToProps = (dispatch) => {
  return {
    fecthProduct: (keyword) => {
      dispatch(act.actLoadProductCallApi(keyword));
    },
  };
};

export default connect(mapStateToProps, mapDisPatchToProps)(ModalSearch);
