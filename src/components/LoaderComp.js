import React, { Component } from "react";
import Loader from "react-js-loader";
class LoaderComp extends Component {
  render() {
    return (
      <div>
        <Loader
          type="spinner-cub"
          bgColor={"#000000"}
          title={"Please Wait ..."}
          color={"#000000"}
          size={100}
          visible={this.props.visible}
        />
      </div>
    );
  }
}
export default LoaderComp;
