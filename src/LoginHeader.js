import React, { Component } from "react";
import user from "./images/user.png";
export default class LoginHeader extends Component {
  render() {
    const { userType } = this.props;
    return (
      <div id="header-content">
        {userType ? "User Details" : "user"}
        {userType ? <img id="user-logo" src={user} /> : <></>}
      </div>
    );
  }
}
