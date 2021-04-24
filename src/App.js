import React, { Fragment } from "react";
import Home from "./containers/Home/Home";
import MenuPage from "./containers/MenuPage/MenuPage";
import Sections from "./containers/Sections/Sections";
import Customization from "./containers/Customization/Customization";
import Checkout from "./containers/Checkout/Checkout";
import About from "./containers/About/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Zoom } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";
import { Route, Switch, Redirect } from "react-router-dom";

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
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/about" exact component={About} />
            <Redirect to="/" />
        </Switch>
    );
    const helmetContext = {};
    return (
        <Fragment>
            <HelmetProvider context={helmetContext}>
                {routes}
                <ToastContainer
                    limit={3}
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    transition={Zoom}
                    style={{ width: "100%" }}
                />
            </HelmetProvider>
        </Fragment>
    );
};

export default App;
