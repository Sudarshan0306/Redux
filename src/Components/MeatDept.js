import React, { Component } from "react";

import { connect } from "react-redux";
import MeatInvUpdate from "../actions/meatInvUpdate";
import { bindActionCreators } from "redux";

class MeatDept extends Component {

    increment = (operation, index) => {
        this.props.meatUpdate(operation, index)
    }

    render() {
        // console.log(this.props.meatData);
        const meatItems = this.props.meatData.map((item, i) => {
            return (
                <div key={i}>
                    <li> {item.food} : {item.quantity}  </li>
                    <input type='button' onClick={()=> {this.increment('+', i)} } value= '+' />
                    <input type='button' onClick={()=> {this.increment('-', i)} } value = '-' />
                </div>
            )
        })
        return (
            <>
                <h1> Meat Department</h1>
                <ul>{meatItems}  </ul>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        meatData : state.meat
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        meatUpdate: MeatInvUpdate,
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps) (MeatDept);