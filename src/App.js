import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Orders from "./components/orders/Orders";
import CheckOut from "./components/checkout/CheckOut";
import Payment from "./components/checkout/Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "firebase";
import { useStateValue } from "./StateProvider";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51JveD8SASCj9rZda8M5bvVGwu4gMMFmPdYCCjxra2ZUNbBX5EkYfRzUldqpPDGqQc06cOZrPmWcz8gprQMMEoXmu00dF8XvDCO"
);

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
          <Route exact path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <CheckOut />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
