import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";

import AdressEditPage from "../AdressEditPage";
import LoginPage from "../LoginPage";
import SignupPage from "../SignupPage";
import AdressRegisterPage from "../AdressRegisterPage";
import FeedPage from "../FeedPage";
import ProfilePage from "../ProfilePage";
import ProfileEditPage from "../ProfileEditPage";
import CartPage from "../CartPage";
import RestaurantPage from "../RestaurantPage";
import SearchPage from "../SearchPage";
import { ProtectedRoute } from "../../components/ProtectedRout";
import { SemiProtectedRoute } from "../../components/SemiProtectedRoute";


export const routes = {
  login: '/login',
  signup: '/signup',
  adressRegister: '/adressRegister',
  feed: '/',
  search: '/search',
  restaurant: '/restaurant',
  profile: '/profile', 
  profileEdit: '/profileEdit',
  adressEdit: '/adressEdit',
  cart: '/cart'
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.login} component={() => <LoginPage/>} />
        <Route exact path={routes.signup} component={() => <SignupPage/>} />
        
        <SemiProtectedRoute exact path={routes.adressRegister} component={() => <AdressRegisterPage/>} />
        
        <ProtectedRoute exact path={routes.feed} component={() => <FeedPage/>} />
        <ProtectedRoute exact path={routes.search} component={() => <SearchPage/>} />
        <ProtectedRoute exact path={routes.restaurant} component={() => <RestaurantPage/>} />
        <ProtectedRoute exact path={routes.profile} component={() => <ProfilePage/>} />
        <ProtectedRoute exact path={routes.profileEdit} component={() => <ProfileEditPage/>} />
        <ProtectedRoute exact path={routes.adressEdit} component={() => <AdressEditPage/>} />
        <ProtectedRoute exact path={routes.cart} component={() => <CartPage/>} />
        
        <Route path='*' component={() => 'Página não encontrada'} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
