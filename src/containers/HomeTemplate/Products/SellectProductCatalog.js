import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./modules-catalog/action";
import Product from "../../Components/Product/index";
import Loader from "../../Components/Loader/index";

export class SellectProductCatalog extends Component {
  renderProduct = () => {
    const { data } = this.props;
    if (data) {
      return data.map((item) => {
        return <Product key={item.productID} product={item} />;
      });
    }
  };

  // static getDerivedStateFromProps = (props, state) => {
  //   console.log(props.data);
  //   return true;
  // };
  // componentDidMount = () => {
  //   this.props.fetchCatalogID(this.props.match.params.catalogID);
  // };
  componentDidUpdate(preProps, preState) {
    if (preProps.match.params.catalogID !== this.props.match.params.catalogID) {
      this.props.fetchCatalogID(this.props.match.params.catalogID);
    }
  }
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
    loading: state.getProductCatalog.loading,
    data: state.getProductCatalog.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCatalogID: (id) => {
      dispatch(action.actGetProductCatalogCallApi(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellectProductCatalog);
