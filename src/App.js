import React, { Fragment } from "react";
import "./App.css";

import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./containers/Home/Home";
import MenuPage from "./containers/MenuPage/MenuPage";
import Sections from "./containers/Sections/Sections";
const App = () => {
    let routes = (
        <Switch>
            <Route path="/" exact component={Home} />;
            <Route path="/menu" exact component={MenuPage} />
            <Route
                path="/sections"
                exact
                render={() => <Sections sectionName="ourFavorites" />}
            ></Route>
            {/* <Route
                path="/sections"
                exact
                render={(props) => <Sections {...props} />}
            /> */}
        </Switch>
    );
    return <Fragment>{routes}</Fragment>;
};

export default withRouter(App);
