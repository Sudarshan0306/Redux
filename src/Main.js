import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import clearInventory from './actions/clearInventory';

class Main extends Component {
    render() {
        const sampleQuantity = this.props.sampleData.reduce((accum, sampleItem) => 
            accum + sampleItem.quantity, 0
        )
        const secondQuantity = this.props.secondData.reduce((accum, sampleItem) =>
            accum + sampleItem.quantity, 0
        )
        const meatQuantity = this.props.meatData.reduce((accum, sampleItem) =>
            accum + sampleItem.quantity, 0
        )
        return (
            <>
                <h1>Main Page</h1>
                <div>
                    <h3>Sample Department: {sampleQuantity}</h3>
                    <h3>Second Department: {secondQuantity}</h3>
                    <h3>Meat Department: {meatQuantity}</h3>
                    <button onClick={this.props.inventoryClear}>Clear Inventory</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sampleData: state.sample,
        secondData: state.secondSample,
        meatData: state.meat,

    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        inventoryClear: clearInventory
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);