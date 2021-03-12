import React, { Fragment } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import MenuPage from "./containers/MenuPage/MenuPage";
import Sections from "./containers/Sections/Sections";
import Customization from "./containers/Customization/Customization";

const App = () => {
    let routes = (
        <Switch>
            <Route path="/" exact component={Home} />;
            <Route path="/menu" exact component={MenuPage} />
            <Route path="/sections/:sectionName" exact component={Sections} />
            <Route
                path="/sections/:sectionName/:itemName"
                component={Customization}
            />
        </Switch>
    );
    return <Fragment>{routes}</Fragment>;
};

export default App;
