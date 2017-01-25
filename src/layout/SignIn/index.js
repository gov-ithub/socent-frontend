import React from "react";
import API from "../../api/API";
import Logger from "js-logger";

Logger.useDefaults();

const SignIn = () => {
  let username;
  let password;
  const handleSignIn = e => {
    e.preventDefault();
    const api = new API();
    api.login(
      {email: username.value, password: password.value}
    ).then(
      jwt => Logger.info("App::ctor::then", jwt)
    ).catch(
      err => Logger.info("App::ctor::catch", err)
    );
  };

  return (
    <form onSubmit={handleSignIn}>
      <input type="text" name="username" ref={input => username = input} />
      <input type="password" name="password" ref={input => password = input} />
      <button>Login</button>
    </form>
  );
};
export default SignIn
