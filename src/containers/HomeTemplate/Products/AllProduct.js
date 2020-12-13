import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./modules/action";
import Loader from "../../Components/Loader/index";
import Product from "../../Components/Product/index";

class AllProduct extends Component {
  componentDidMount() {
    this.props.fetchListProduct();
  }

  renderProduct = () => {
		const { data } = this.props;
		console.log(data)
    if (data && data.length > 0) {
			return data.map((item) => {
				if (item.productStatus === "0") {
					return <Product key={item.productID} product={item} />;
				}
      });
    }
  };

  render() {
    const { loading } = this.props;
    if (loading) return <Loader />;
    return (
      <div>
        <section className="product">
          <div className="container text-center">
            <h3 className="pb-5 pt-5">Tất cả</h3>
            <div className="row">{this.renderProduct()}</div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listProductReducer.loading,
    data: state.listProductReducer.data,
  };
};

const mapDisPatchToProps = (dispacth) => {
  return {
    fetchListProduct: () => {
      dispacth(action.actListProductApi());
    },
  };
};

export default connect(mapStateToProps, mapDisPatchToProps)(AllProduct);
