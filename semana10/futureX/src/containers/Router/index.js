import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage";
import ListTripsPageForUsers from "../ListTripsPage/ListTripsPageForUsers";
import FormPage from '../FormPage/index';
import LoginPage from '../LoginPage/index';
import ListTripsPageForAdm from '../ListTripsPage/ListTripsPageForAdm'
import CreateTripPage from "../CreateTripPage/index";
import TripsDetailsPage from '../TripsDetailsPage/index'
import SubscriptionDone from '../FormPage/subscriptionDone'
import NewTripAdded from '../CreateTripPage/newTripAdded'

export const routes = {
  root: "/",
  listForUsers: '/users/trips/',
  formPage: '/users/trips/application',
  subscriptionDone: '/users/trip/application/done',
  loginPage: '/login',
  listForAdm: '/adm/trips/',
  createTrip: '/adm/trips/create',
  newTripAdded: '/adm/trips/create/done',
  tripsDetails: '/adm/trips/details'
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomePage} />
        <Route exact path={routes.listForUsers} component={ListTripsPageForUsers}/>
        <Route exact path={routes.formPage} component={FormPage}/>
        <Route exact path={routes.subscriptionDone} component={SubscriptionDone}/>
        <Route exact path={routes.loginPage} component={LoginPage}/>
        <Route exact path={routes.listForAdm} component={ListTripsPageForAdm}/>
        <Route exact path={routes.createTrip} component={CreateTripPage}/>
        <Route exact path={routes.newTripAdded} component={NewTripAdded}/>
        <Route exact path={routes.tripsDetails} component={TripsDetailsPage}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;