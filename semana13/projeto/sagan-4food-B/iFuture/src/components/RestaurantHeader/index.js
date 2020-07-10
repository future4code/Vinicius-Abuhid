import React from 'react';
import * as S from './styles'

function RestaurantHeader(props) {
  const { mock } = props

  return (
    <S.CardWarapper elevation={0}>

      <S.Img image={mock.logoUrl} />

      <S.Content>

        <S.Text color="primary">{mock.name}</S.Text>

        <S.Text color="secondary">{mock.category}</S.Text>

        <S.Shipping>
          <S.Text color="secondary">{mock.deliveryTime} - {mock.deliveryTime + 10} min</S.Text>
          <S.Text color="secondary">Frete {mock.shipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</S.Text>
          <div></div>
        </S.Shipping>

        <S.Text color="secondary">{mock.address}</S.Text>

      </S.Content>

    </S.CardWarapper>
  )
}

export default RestaurantHeader;