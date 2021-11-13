import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./login.css";
import { auth } from "../../firebase";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it successfully create a new user with email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
    //do some fancy firebase register shitt...
  };

  return (
    <div className=" login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input type="text" value={email} onChange={onChangeEmail} />
          <h5>PassWord</h5>
          <input type="password" value={password} onChange={onChangePassword} />
          <button
            className="login__signinbutton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
          <p className="p">
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button className="login__registerbutton" onClick={register}>
            Create your amazon account
          </button>
        </form>
      </div>
    </div>
  );
}
