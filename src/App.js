import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import CheckOut from "./components/checkout/CheckOut";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth().onAuthStateChanged((authUser) => {
      console.log("THE USER IS  ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <CheckOut />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
