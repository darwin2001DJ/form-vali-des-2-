import React, { Component } from "react";
import { userList } from "./UserList";
export default class LoginBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errorMessage: "",
    };
  }
  /////////////////////////Handlers//////////////
  userNameHandler = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  passwordHandler = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  submitHandler = () => {
    console.log(this.state);
    const { parentUpdate } = this.props;
    const { username, password } = this.state;
    const findingUser = userList.find((user) => user.username === username);
    console.log(findingUser);
    if (username.length === 0 && password.length === 0) {
      this.setState({
        errorMessage: "",
      });
    } else {
      if (findingUser) {
        if (findingUser.password === password) {
          if (findingUser.role === "admin") {
            parentUpdate(true);
          } else {
            this.setState({
              errorMessage: "This user does not have access to login",
            });
          }
        } else {
          this.setState({
            errorMessage: "Invalid password",
          });
        }
      } else {
        this.setState({
          errorMessage: "Username does not exist",
        });
      }
    }
  };
  functionsCalled = () => {
    this.submitHandler();
  };
  ////////////////////////////////////////////////
  render() {
    const { username, password, errorMessage } = this.state;
    return (
      <>
        <h2>Admin Login</h2>
        <form id="login-form">
          <input
            id="username"
            name="username"
            placeholder="UserName"
            value={username}
            onChange={this.userNameHandler}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.passwordHandler}
          />
          <div id="errorMessage">{errorMessage}</div>
          <button id="login" type="button" onClick={this.functionsCalled}>
            Login
          </button>
        </form>
      </>
    );
  }
}
