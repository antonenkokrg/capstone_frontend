import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import ShowMenu from "./ShowMenu";
import Login from "./Login";
import Qrcode from "./Qrcode";
import PrivateRoute from "./PrivateRoute";

function Routes({ setToken }) {
    return (
        <div className="pt-5">
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/generateqr">
                    <Qrcode />
                </Route>
                <Route path="/show/:business">
                    <ShowMenu />
                </Route>

                <Route exact path="/login" >
                    <Login setToken={setToken} />
                </Route>

                <PrivateRoute exact path="/menu">
                    <Menu />
                </PrivateRoute>

                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default Routes;
