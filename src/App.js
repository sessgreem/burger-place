import React, { Fragment } from "react";
import "./App.css";

import { Route } from "react-router-dom";
import Home from "./containers/Home/Home";

const App = () => {
    let routes = <Route path="/" exact component={Home} />;
    return <Fragment>{routes}</Fragment>;
};

export default App;
