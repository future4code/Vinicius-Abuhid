import React, { useState } from 'react'
import { connect } from 'react-redux'

import { setDialog } from '../../actions/confirmationDialog'
import { setQuantity } from '../../actions/food'

import * as S from './styles'
import { Dialog, DialogActions, MenuItem } from '@material-ui/core';

export function ConfirmationDialog(props) {

    const { open, setOpen, itemId, setQuantity } = props

    const [quantityHere, setQuantityHere] = useState(0)

    const selectOption = (e) => {
        setQuantityHere(e.target.value)
    }

    const addQuantityAndClose = () => {
        const infoQuantity = {
            id: itemId,
            quantity: quantityHere
        }
        setQuantity(infoQuantity)
        setQuantityHere(0)
        setOpen(false);
    }

    return (
        <Dialog
            disableBackdropClick disableEscapeKeyDown open={open} onClose={addQuantityAndClose}
            BackdropProps={{
                style: {
                    backgroundColor: 'black',
                    opacity: 0.1,
                },
            }}
            PaperProps={{
                style: {
                    boxShadow: "none",
                },
            }}
            id="dialog"
        >
            <S.DialogTitleStyled>
                Selecione a quantidade desejada
            </S.DialogTitleStyled>

            <S.OptionsContent>

                <S.Input
                    select
                    fullWidth
                    variant='outlined'
                    value={quantityHere}
                    onChange={selectOption}
                    SelectProps={{
                        IconComponent: () => <S.Img src={require("../../assets/dropdown.svg")} alt='home' />,
                      }}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
                        <MenuItem value={number}>{number}</MenuItem>
                    ))}
                </S.Input>

            </S.OptionsContent>

            <DialogActions>

                <S.ButtonStyled onClick={addQuantityAndClose}>
                    Adicionar ao carrinho
                </S.ButtonStyled>

            </DialogActions>

        </Dialog>
    )
}

const mapStateToProps = state => ({
    open: state.confirmationDialog.dialogOpen,
    itemId: state.confirmationDialog.itemId
})

const mapDispatchToProps = dispatch => ({
    setOpen: (option) => dispatch(setDialog(option)),
    setQuantity: (infoQuantity) => dispatch(setQuantity(infoQuantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationDialog)
