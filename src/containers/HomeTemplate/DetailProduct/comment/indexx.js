import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import {connect} from "react-redux";
import Loader from "../../../Components/Loader/index";
import * as action from "./modules/action";
import { withRouter } from "react-router-dom";

function Comment(props) {

	useEffect(() => {
		props.fecthComment(props.match.params.id);
	}, []);

  const renderComment = () => {
		const { comment, loading } = props;
		if(loading) return <Loader/>
    if (comment) {
      return comment.map((item) => {
        return item.comment.map((item, index) => {
          if (item.commentStatus === "0") {
            return (
              <div key={index}>
                <div>
                  <Avatar alt="Avatar User" src={item.userAvatar} />
                  {item.userName}
                </div>
                <div>{item.commentText}</div>
                <hr />
              </div>
            );
          }
        });
      });
    }
  };

  return <div>{renderComment()}</div>;
}

const maStateToProps = (state) => {
  return {
    loading: state.getCommentReducer.loading,
    comment: state.getCommentReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fecthComment: (id) => {
      dispatch(action.actGetCommetCallApi(id));
    },
  };
};

const Connectedcomponent = connect(maStateToProps, mapDispatchToProps)(Comment);
export default withRouter(Connectedcomponent) ;
