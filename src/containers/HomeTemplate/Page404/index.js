import React, { Component } from "react";

export default class PageNotFound extends Component {
  render() {
    return (
      <div>
        <div className="site">
          <div className="sketch">
            <div className="bee-sketch red" />
            <div className="bee-sketch blue" />
          </div>
          <h1>
            404:
            <small>Players Not Found</small>
          </h1>
        </div>
      </div>
    );
  }
}
