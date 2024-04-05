import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import menuReducer from "./store/reducers/menu";
import cartReducer from "./store/reducers/cart";

const rootReducer = combineReducers({
    menu: menuReducer,
    cart: cartReducer,
});

const store = createStore(rootReducer);
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
