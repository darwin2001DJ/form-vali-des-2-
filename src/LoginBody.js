import React from "react";
export default function LoginBody() {
  return (
    <>
      <h2>Admin Login</h2>
      <form id="login-form">
        <input id="username" name="username" placeholder="UserName" />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <div id="errorMessage"> </div>
        <button id="login" type="button">
          Login
        </button>
      </form>
    </>
  );
}
