import React, { Component } from "react";

export default class Avatar extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>{this.props.name}</h3>
        <img src={this.props.imgUrl} alt="picture" />
        <button onClick={this.props.Delete}>Delete</button>
        <button onClick={this.props.Update}>Update</button>
      </div>
    );
  }
}
