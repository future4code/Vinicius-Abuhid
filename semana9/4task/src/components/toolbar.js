import React from 'react'
import { connect } from 'react-redux'
import { setFilter, deleteCompletedTasks, completeAllTask } from '../actions/index'

class ToolBar extends React.Component{
    constructor(props){
        super(props)
    }

    completeAllTasks = () => {
        this.props.completeALL()
    }

    deleteAll = ()=> {
        this.props.deleteAllcompleted()
    }

    render(){
        return(
            <div>
                <button onClick={this.completeAllTasks}>Marcar todas como completas</button>
                <button onClick={()=> this.props.setFilter('todas')} >Todas</button>
                <button onClick={()=> this.props.setFilter('pendentes')} >Pendentes</button>
                <button onClick={()=> this.props.setFilter('completas')} >Completas</button>
                <button onClick={this.deleteAll} >Remover completas</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        completeALL: () => {dispatch(completeAllTask())},
        deleteAllcompleted: () => {dispatch(deleteCompletedTasks())},
        setFilter: (filter)=>{dispatch(setFilter(filter))}
    }
}

export default connect(null, mapDispatchToProps)(ToolBar) 
