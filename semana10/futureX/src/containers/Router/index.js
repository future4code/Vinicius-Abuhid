import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage";
import ListTripsPageForUsers from "../ListTripsPage/ListTripsPageForUsers";
import FormPage from '../FormPage/index';
import LoginPage from '../LoginPage/index';
import ListTripsPageForAdm from '../ListTripsPage/ListTripsPageForAdm'
import CreateTripPage from "../CreateTripPage/index";



export const routes = {
  root: "/",
  listForUsers: '/trips/list-for-users',
  formPage: '/application-form',
  loginPage: '/login',
  listForAdm: '/trips/list-for-adm',
  createTrip: '/trips/create',
  tripsDetails: '/trips/details'
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomePage} />
        <Route exact path={routes.listForUsers} component={ListTripsPageForUsers}/>
        <Route exact path={routes.formPage} component={FormPage}/>
        <Route exact path={routes.loginPage} component={LoginPage}/>
        <Route exact path={routes.listForAdm} component={ListTripsPageForAdm}/>
        <Route exact path={routes.createTrip} component={CreateTripPage}/>
        {/* <Route exact path={routes.listForAdm} component={ListTripsPageForAdm}/> */}
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
