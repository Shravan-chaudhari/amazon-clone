import react, { useEffect } from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import "./App.css";
import Checkout from "./Checkout/Checkout";
import Login from "./login/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider/StateProvider";
import Footer from "./Footer/footer";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only load once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            {/* <Footer /> */}
          </Route>
          <Route path="/">
            <Header />
            <Home />
            {/* <Footer /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
