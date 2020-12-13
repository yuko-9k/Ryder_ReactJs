import React, { Component } from "react";
import Axios from "axios";
import NewArrivals from "../../Components/NewArrivals/index";

export default class ListNewArrivals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovie: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    })
      .then((result) => {
        console.log(result.data);
        this.setState({
          listMovie: result.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderHtml = () => {
    const { listMovie } = this.state;
    return listMovie.map((item) => {
      return (
        <NewArrivals key={item.maPhim} className="col-md-3" movie={item} />
      );
    });
  };

  render() {
    const { loading } = this.state.loading;
    if (loading) return <p>Loading...</p>;
		return (
			<div className="product">
				<div className="container text-center">
					<div className="row">
						{this.renderHtml()}
					</div>
				</div>	
			</div>
		
		);
  }
}
