import React from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const StyledButton = styled(Button)`
`;

const Filter = ()=> {
    return(
        <div>
            <Button>Marca todas como completas</Button>
            <Button>Todas</Button>
            <Button>Pendentes</Button>
            <Button>Completas</Button>
            <Button>Remover completas</Button>
        </div>
    )
}

export default Filter