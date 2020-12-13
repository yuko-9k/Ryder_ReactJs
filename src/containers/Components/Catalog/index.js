import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "./modules/action";

class Catalog extends Component {
  componentDidMount = () => {
    this.props.fecthCatalog();
  };

  renderCatalog = () => {
    const { catalog } = this.props;
    if (catalog) {
      return catalog.map((item, index) => {
         if (item.catalogStatus === "0") {
          return (
            <Fragment key={index}>
              <NavLink to={`/Product/SelectProductCatalog/${item.catalogID}`}>
                {item.catalogName}
              </NavLink>
            </Fragment>
          );
        }
      });
    }
  };

  render() {
    return <div>{this.renderCatalog()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    catalog: state.catalogReducer.catalog,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fecthCatalog: () => {
      dispatch(action.actGetCatalogCallApi());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
