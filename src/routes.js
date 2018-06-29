import React from "react";
import ChildComponent from "./components/childComponent/ChildComponent";
import { Route, Switch } from "react-router-dom";
import Users from "./components/users/Users";

export default function routes() {
  return (
    <Switch>
      <Route exact path="/" component={ChildComponent} />
      <Route path="/users" component={Users} />
      <Route path="/" render={_ => <div>Error: 404: page not found</div>} />
    </Switch>
  );
}
