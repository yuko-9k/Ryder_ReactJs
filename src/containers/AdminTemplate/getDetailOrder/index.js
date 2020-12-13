import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./modules/action";
// import CollapsibleTable from "./Order";

class GetDetailOder extends Component {
  componentDidMount = () => {
    this.props.fetchOrder();
  };

  renderData = () => {
    const { order } = this.props;
    if (order && order.length > 0) {
      return order?.map((item) => {
        return item.data.map((data) => {
          return (
            <tr key={data.productID}>
              <td>
                <img
                  style={{ width: 50 }}
                  src={data && data.productImg}
                  alt=""
                />
              </td>
              <td>{data && data.productName}</td>
              <td>{data && data.quantity}</td>
              <td>{data && data.totalPrice}</td>
              <td>
                {item.cartStatus === "0" ? (
                  <button className="btn btn-success" disabled>
                    Đang xử lý
                  </button>
                ) : (
                  <button className="btn btn-danger" disabled>
                    Đã giao hàng
                  </button>
                )}
              </td>
            </tr>
          );
        });
      });
    }
  };

  render() {
    return (
      <div>
        <table className="table table-hover table-responsive-sm">
          <tbody>
            <tr>
              <td>Sản phẩm</td>
              <td>Tên sản phẩm</td>
              <td>Số lượng</td>
              <td>Tổng tiền</td>
              <td>Trạng thái</td>
            </tr>
            {this.renderData()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.getDetailOrderReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrder: () => {
      dispatch(action.getDetailOrderCallApi());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetDetailOder);
