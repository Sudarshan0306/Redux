import React, { Component } from 'react';

//to connect this component to redux we need a glue which react-redux;
// we need to use connect function
import SampleInvUpdate from '../actions/sampleInvUpdate';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// if a component needs to connect with redux this is what we need to do every single time;

class SampleDept extends Component {
    increment = (operation, index) => {
        this.props.updateSample(operation, index);
    }
    render() {
        const firstItems = this.props.sampleData.map((item, i) => {
            return (
                <div key={i}>
                    <li> {item.food} : {item.quantity}  </li>
                    <input type='button' onClick={()=> {this.increment('+', i)} } value= '+' />
                    <input type='button' onClick={()=> {this.increment('-', i)} } value = '-' />
                </div>
            )
        });
        return (
            <>
                <h1> Sample Department </h1>
                <ul>
                    {firstItems}
                </ul>

            </>
        )
    }
}
// console.log(connect);


function mapStateToProps(state) {
    return {
        sampleData: state.sample
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateSample: SampleInvUpdate
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(SampleDept);