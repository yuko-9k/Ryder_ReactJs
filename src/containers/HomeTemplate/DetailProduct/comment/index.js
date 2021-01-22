import React, { Component } from "react";
import * as action from "./modules/action";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


class Comment extends Component {
  componentDidMount = () => {
    this.props.fetchComment(this.props.match.params.id);
	};

	renderComment = () => {
		const user = JSON.parse(localStorage.getItem("UserInfo"));
		console.log(user);
    const { comment } = this.props;
    if (comment) {
      return comment.map((item) => {
        return item.comment.map((item, index) => {
          if (item.commentStatus === "0") {
            return (
              <div key={index}>
                <p>
                  <i className="fa fa-user mr-2" />
                  {item.userName}
                </p>
                <p>{item.commentText}</p>
                <hr />
              </div>
            );
          }
        });
      });
    }
  };

  render() {
    return <div className="container">{this.renderComment()}</div>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComment: (id) => {
      dispatch(action.actGetCommetCallApi(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    comment: state.getCommentReducer.data,
  };
};

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);

export default withRouter(ConnectedComponent);
