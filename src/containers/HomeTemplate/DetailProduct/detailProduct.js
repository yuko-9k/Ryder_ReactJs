import React, { Component } from "react";
import { NavLink,Link } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "../../Components/Loader/index";
import * as action from "./modules/action";
import Comment from "./comment/indexx";


class DetailProduct extends Component {

	constructor(props) {
		super(props);
		this.state = {
			comment:"",
		}
	}

  componentDidMount = () => {
		const id = this.props.match.params.id;
    this.props.fetchDetailProduct(id);
  };

  handleCart = () => {
		const { data } = this.props;
		this.props.fetchProductToCart(data[0]);
	};
	

  render() {
		const { loading, data } = this.props;
    if (loading) return <Loader />;
    return (
      <div>
        <section className="detail-product mb-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <img
                  src={`${data && data[0].productImg}`}
                  alt=""
                />
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-9">
                <h3>{data && data[0].productName}</h3>
                <span>{data && data[0].productPrice}</span>
                <p>
								hoặc thực hiện 4 lần thanh toán không tính lãi suất $ 22,25 AUD hai tuần một lần
                  với
                  <img src="../img/logo-afterpay-colour@3x.png" alt="" />
                  <NavLink to="">Thêm thông tin</NavLink>
                </p>
              </div>
              <div className="col-3 text-right">
                <p>
                  <button
                    className="btn-default btn-white"
                    onClick={() => {
                      this.handleCart();
                    }}
                  >
                    Thêm sản phẩm
                  </button>
                </p>
                <p>
                  <button className="btn-default">
                    <NavLink to="">Mua ngay</NavLink>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="describeProduct mb-5 mt-5">
          <div className="describeContent">
            <div className="container-fluid">
              <div className="row">
                <div className="col-6">
                  <p>
                    {data && data[0].productDescription}
                  </p>
                  <p>Các phép đo áo:</p>
                  
                  <div className="mb-5 sizeGuide">
                    <Link to="">Kích cỡ</Link>
                    <Link to="">GIAO HÀNG MIỄN PHÍ VÀ ĐỔI TRẢ DỄ DÀNG</Link>
                  </div>
                  <p>Đăng ký để nhận giảm giá 10% khi mua hàng đầu tiên</p>
                  <div className="emailAdress text-center">
                    <input type="text" placeholder="Địa chỉ Email" />
                    <button className="btn-default">Xác nhận</button>
                  </div>
                  <img src="../img/describe-1.png" className="pl-0" alt=""/>								
                  <p />
                </div>
                <div className="col-6">
                  <img src="../img/describe-right-1.png" alt="" />
									<img src="../img/describe-right-2.png" alt="" />
                </div>
							</div>
							<p>Bạn nghĩ thế nào?...</p>
                  <p></p>
                  <div className="row boxComment">
                    <div className="col-12">
                      <form>
												<textarea
													cols={30}
													rows={10}
													placeholder="Bình luận cho chúng tôi biết?"
													name="comment"
													onChange={(e) => this.setState({
														comment:e.target.value
													})}
                        />
												<button className="btn-default"
													onClick={(e) => {
														e.preventDefault();
														let commentValue = this.state.comment;
														this.props.fetchComment(data[0].productID, commentValue,this.props.history);
													}}
												>Bình luận</button>
											</form>
											<Comment/>
                    </div>
                  </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.detailProductReducer.loading,
    data: state.detailProductReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetailProduct: (id) => {
      dispatch(action.actDetailApi(id));
    },
    fetchProductToCart: (data) => {
      dispatch(action.actAddProductToCart(data));
		},
		fetchComment: (idProduct,commentValue,history) => {
			dispatch(action.actAddComment(idProduct,commentValue,history));
		}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
