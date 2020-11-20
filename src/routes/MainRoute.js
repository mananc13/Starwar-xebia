import React from "react";
import Loadable from "react-loadable";
import { Switch, Redirect, BrowserRouter } from "react-router-dom";
import Loading from "../general/component/Loading";
import Header from "../component/header/Header";
import AuthWrapper from "./Routes";

const HomeRoute = Loadable({
  loader: () => import("../component/home/Home"),
  loading: Loading
});

const LoginRoute = Loadable({
  loader: () => import("../component/login/Login"),
  loading: Loading
});

function MainRoute() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <AuthWrapper loginRequired={true} path="/home" component={HomeRoute} />
        <AuthWrapper
          loginRequired={true}
          loginPage={true}
          path="/login"
          component={LoginRoute}
        />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
}

export default MainRoute;
