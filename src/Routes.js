import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
// import Jobs from "./Jobs";
// import Company from "./Company";
import Login from "./Login";
// import Profile from "./Profile";

function Routes({ setToken }) {
    return (
        <div className="pt-5">
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/login" >
                    <Login setToken={setToken} />
                </Route>

                <Route exact path="/menu">
                    <Menu />
                </Route>

                {/*<Route exact path="/jobs">
                    <Jobs />
                </Route>

                <Route
                    path="/companies/:handle"
                >
                    <Company />
                </Route>

                <Route
                    path="/profile"
                >
                    <Profile />
                </Route> */}

            </Switch>
        </div>
    );
}

export default Routes;