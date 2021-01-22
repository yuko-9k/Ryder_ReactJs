import React, {useEffect} from 'react'
import {connect} from "react-redux";
import * as action from "./modules-catalog/action";
import Product from "../../Components/Product/index";
import Loader from "../../Components/Loader/index";

function SelectProductCatalog(props) {

	useEffect(() => {
		props.fetchCatalog(props.match.params.catalogID);
	},[props.match.params.catalogID])

	const renderProduct = () => {
		const { data, loading } = props;
		if(loading) return <Loader/> 
		if (data) {
			return data.map((item, index) => {
				return (<Product key={index} product={item} />);
			});
		}
	}

	return (
		<div>
			<section className="product">
          <div className="container text-center">
            <h3 className="pb-5 pt-5">Tất cả</h3>
            <div className="row">{renderProduct()}</div>
          </div>
        </section>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		loading: state.getProductCatalog.loading,
		data: state.getProductCatalog.data,
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		fetchCatalog: (id) => {
			dispatch(action.actGetProductCatalogCallApi(id))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectProductCatalog);