import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export const EmptyCartWrapper = styled.div`
    text-align: center;
    height: 42px;
    margin: 8px 0 33px;
    width: 92%;
`

export const Text = styled(Typography)`
    font-size: 16px;
    height: 16px;
    letter-spacing: -0.4px;
    margin-bottom: 8px;
    color: ${props => props.red ? "#e8222e" : "#000000"};
`

export const FullCartWrapper = styled.div`
    width: 92%;
    margin-bottom: 16px;
`

export const DivMain = styled.div`
    margin-bottom: 16px;
`
