import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router'
import { routes } from '../Router'

import * as S from './styles'

import Appbar from '../../components/Appbar';
import RestaurantHeader from '../../components/RestaurantHeader';
import RestaurantDishes from '../../components/RestaurantDishes';

function RestaurantPage(props) {
  const { mock, goToFeed } = props

  useEffect(() => {
    if (Object.keys(mock).length === 0) {
      goToFeed()
    }
  }, [mock, goToFeed])

  return (
    <div>
      <Appbar page='restaurant' />
      {Object.keys(mock).length !== 0 &&
        <S.RestaurantWrapper>

          <RestaurantHeader
            mock={mock}
          />
          <RestaurantDishes
            data={mock}
          />
        </S.RestaurantWrapper>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  mock: state.food.restaurantDetails
})

const mapDispatchToProps = (dispatch) => ({
  goToFeed: () => dispatch(push(routes.feed)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantPage);