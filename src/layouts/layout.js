import React from "react";
import Header from "./header";
import Footer from "./footer";
import Homepage from "../containers/HomePage";
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Header />
      <Switch >
              <Route exact path="/"><Homepage /></Route>
            </Switch>
      
      <Footer />
    </div>
  );
};

export default Layout;
