import "./App.css";
import LoginHeader from "./LoginHeader";
import LoginBody from "./LoginBody";
import UserDisplay from "./UserDisplay";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      admin: false,
    };
  }

  adminHandler = (val) => {
    console.log("adminHandler", val);
    this.setState({
      admin: val,
    });
  };

  render() {
    const { admin } = this.state;

    return (
      <div>
        {admin ? (
          <>
            <LoginHeader userType={admin} />
            <UserDisplay />
          </>
        ) : (
          <>
            <LoginHeader userType={admin} />
            <LoginBody parentUpdate={this.adminHandler} />
          </>
        )}
      </div>
    );
  }
}
