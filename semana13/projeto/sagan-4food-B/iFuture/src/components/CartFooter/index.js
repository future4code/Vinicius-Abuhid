import React, { useState } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import * as S from './styles'

import { placeOrder } from '../../actions/food'
import { routes } from '../../containers/Router'

export function CartFooter(props) {
    const { restaurant, infoQuantity, filteredList, placeOrder, restaurantId, order, goToFeed } = props

    const [payment, setpayment] = useState('')

    function savePaymentMethod(e) {
        setpayment(e.target.id)
    }

    function onPlaceOrder(e) {
        e.preventDefault()
        const placeOrderData = {
            products: infoQuantity,
            paymentMethod: payment
        }
        if (order && Object.keys(order).length !== 0) {
            alert('Não é possível realizar dois pedidos ao mesmo tempo. Aguarde seu seu pedido ativo ser concluído!')
            goToFeed()
        }
        else if (infoQuantity.length === 0) {
            alert('Adicione produtos ao carrinho para realizar um pedido!')
        }
        else {
            placeOrder(placeOrderData, restaurantId)
        }
    }

    let newList = []
    for (let item of filteredList) {
        for (let elem of infoQuantity) {
            if (item.id === elem.id) {
                newList.push(item.price * elem.quantity)
            }
        }
    }

    const total = newList.reduce((prevVal, numero) => { return prevVal + numero }, 0)

    const subtotal = total + restaurant.shipping

    return (
        <S.CartFooterWrapper>

            {Object.keys(restaurant).length === 0
                ? <S.Text right> Frete R$0,00 </S.Text>
                : infoQuantity.length === 0
                    ? <S.Text right> Frete R$0,00 </S.Text>
                    : <S.Text right> Frete {restaurant.shipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </S.Text>
            }

            <S.PriceBoxWrapper>
                <S.Text> SUBTOTAL </S.Text>
                {Object.keys(restaurant).length === 0
                    ? <S.Text red bold>R$00,00</S.Text>
                    : infoQuantity.length === 0
                        ? <S.Text red bold>R$00,00</S.Text>
                        : <S.Text red bold> {subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </S.Text>
                }
            </S.PriceBoxWrapper>

            <S.Title> Forma de pagamento </S.Title>

            <S.FormWrapper onSubmit={onPlaceOrder}>

                <S.PayementOptionBoxWrapper>
                    <S.RadioButtonWrapper
                        name="payementOption"
                        type="radio"
                        value={payment || ''}
                        id='money'
                        required
                        onClick={savePaymentMethod}
                        disabled={Object.keys(restaurant).length !== 0 && restaurant.products.length === 0 ? true : false}
                    />

                    <S.Text> Dinheiro </S.Text>
                </S.PayementOptionBoxWrapper>

                <S.PayementOptionBoxWrapper>
                    <S.RadioButtonWrapper
                        name="payementOption"
                        type="radio"
                        value={payment || ''}
                        id='creditcard'
                        onClick={savePaymentMethod}
                        disabled={Object.keys(restaurant).length !== 0 && restaurant.products.length === 0 ? true : false}
                    />

                    <S.Text> Cartão de crédito </S.Text>
                </S.PayementOptionBoxWrapper>

                <S.ConfirmButtonWrapper
                    marginTop={Object.keys(restaurant).length !== 0 && restaurant.products.length === 0 ? '145px' : '19px'}
                    color={Object.keys(restaurant).length !== 0 && restaurant.products.length === 0 ? 'rgba(232, 34, 46, 0.5)' : '#e8222e'}
                    type='onsubmit'
                >
                    Confirmar
                </S.ConfirmButtonWrapper>

            </S.FormWrapper>

        </S.CartFooterWrapper>
    )
}

const mapStateToProps = state => ({
    restaurantId: state.food.restaurantId
})

const mapDispatchToProps = dispatch => ({
    placeOrder: (placeOrderData, restaurantId) => dispatch(placeOrder(placeOrderData, restaurantId)),
    goToFeed: () => dispatch(push(routes.feed))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartFooter)