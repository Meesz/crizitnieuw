import React from "react";
import {Home} from "Views/home"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "./Views/Home/Login";

export const Router = () => {
    return (
      <BrowserRouter>
          <Switch>
            <Route path="/" exact={true}>
              <Home/>
            </Route>
            <Route path="/releases" exact={true}>
              <Login/>
            </Route>
          </Switch>
      </BrowserRouter>
    );
  };
  