import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as action from "./modules-catalog/action";
import Product from "../../Components/Product/index";
import Loader from "../../Components/Loader/index";

function SellectProductCatalog(props) {
  const renderProduct = () => {
    const { data } = props;
    if (data) {
      return data.map((item) => {
        return <Product key={item.productID} product={item} />;
      });
    }
  };
  useEffect(() => {
    props.fetchCatalogID(props.match.params.catalogID);
  }, [props.match.params.catalogID]);

  const { loading } = props;
  if (loading) return <Loader />;
  return (
    <div>
      <section className="product">
        <div className="container text-center">
          <h3 className="pb-5 pt-5">Tất cả</h3>
          <div className="row">{renderProduct()}</div>
        </div>
      </section>
    </div>
  );
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
