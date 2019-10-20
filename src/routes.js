import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./components/sign_up";
import SignIn from "./components/sign_in";
import ResponsibleApp from "./responsibleIndex"
import StudentApp from "./studentIndex"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/responsible-app" component={ResponsibleApp} />
      <Route path="/student-app" component={StudentApp} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;