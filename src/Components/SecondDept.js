import React, { Component } from "react";
import { connect } from "react-redux";
import SecondInvUpdate from "../actions/secondInvUpdate";
import { bindActionCreators } from "redux";

class secondDept extends Component {
    increment = (qChange, index) => {
        this.props.updateSecond(qChange, index)
    }

    render() {
        // console.log(this.props.second)
        const secondItems = this.props.second.map((item, i) => {
           return (
            <div key={i}>
                <li> {item.food} : {item.quantity}  </li>
                <input type='button' onClick={()=> {this.increment(+1, i)} } value= '+' />
                <input type='button' onClick={()=> {this.increment(-1, i)} } value = '-' />
            </div>
        )
        })
        return (
            
            <>
                <h1> Second Department </h1>
                <ul> {secondItems} </ul>
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        second: state.secondSample
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateSecond : SecondInvUpdate
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(secondDept);