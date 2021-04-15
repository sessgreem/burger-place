import React, { Fragment } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import MenuPage from "./containers/MenuPage/MenuPage";
import Sections from "./containers/Sections/Sections";
import Customization from "./containers/Customization/Customization";
import Checkout from "./containers/Checkout/Checkout";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Zoom } from "react-toastify";

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
            <Route path="/checkout" component={Checkout} />
        </Switch>
    );
    return (
        <Fragment>
            {routes}
            <ToastContainer
                position="bottom-center"
                autoClose={6000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable={true}
                pauseOnHover={true}
                style={{ width: "100%" }}
                transition={Zoom}
            />
        </Fragment>
    );
};

export default App;
