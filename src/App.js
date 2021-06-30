import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { UserContext } from "./Context/UserContext";
//firebase
import firebase from "firebase/app";
import "firebase/auth";

//components
import Home from "./Pages/Home";
import Notfound from "./Pages/Notfound";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import { useState } from "react";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Firebaseconfig from "./Config/Firebaseconfig";

//init firebase
firebase.initializeApp(Firebaseconfig);

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={Notfound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
