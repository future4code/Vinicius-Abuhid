import React from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../../containers/Router'

import { BottomNavigationAction } from '@material-ui/core';
import { DivWrapper } from './styles'
import { getRestaurantDetail } from '../../actions/food';

export function Bottombar(props) {
  const { page, goToCart, goToFeed, goToProfile, restaurantId, getRestaurantDetail } = props

  let iconHome = <img src={require("../../assets/homepage-grey.svg")} alt='CartPage' />
  if (page === 'home') {
    iconHome = <img src={require("../../assets/homepage-red.svg")} alt='home' />
  }

  let iconCart = <img src={require("../../assets/shopping-cart-grey.svg")} alt='CartPage' />
  if (page === 'cart') {
    iconCart = <img src={require("../../assets/shopping-cart-red.svg")} alt='home' />
  }

  let inconProfile = <img src={require("../../assets/avatar-grey.svg")} alt='Profile' />
  if (page === 'profile') {
    inconProfile = <img src={require("../../assets/avatar-red.svg")} alt='home' />
  }

  const onClickCart = async () => {
    if(restaurantId !== 0) {
      await getRestaurantDetail(restaurantId)
    }
    goToCart()
  }

  return (
    <DivWrapper>
      <BottomNavigationAction label="HomePage" icon={iconHome} onClick={goToFeed} />
      <BottomNavigationAction label="CartPage" icon={iconCart} onClick={onClickCart} />
      <BottomNavigationAction label="Profile" icon={inconProfile} onClick={goToProfile} />
    </DivWrapper>
  )
}

const mapStateToProps = state => ({
  restaurantId: state.food.restaurantId
});


const mapDispatchToProps = dispatch => ({
  goToFeed: () => dispatch(push(routes.feed)),
  goToCart: () => dispatch(push(routes.cart)),
  goToProfile: () => dispatch(push(routes.profile)),
  getRestaurantDetail: (restaurantId) => dispatch(getRestaurantDetail(restaurantId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Bottombar)