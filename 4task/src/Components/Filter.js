import React from 'react'
import Button from '@material-ui/core/Button'


class Filter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            completeList : []
        }
    }
    render(){
        return(
            <div>
                <Button>Marcar todas como completas</Button>
                <Button>Todas</Button>
                <Button>Pendentes</Button>
                <Button>Completas</Button>
            </div>
        )
    }
}

export default Filter