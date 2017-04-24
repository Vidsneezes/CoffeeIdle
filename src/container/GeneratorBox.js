import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import Generator from '../components/Generator';
import { buyGenerator } from '../actions/index';
import {calculateCost, calculateProduction }from '../reducers/index.js';

const mapStateToProps = (state, ownProps) => {
    const baseCost = state.getIn(['generators',ownProps.indexN,'baseCost']);
    const rate = state.getIn(['generators',ownProps.indexN,'rate']);
    const amount = state.getIn(['generators',ownProps.indexN,'amount']);
    const productionBase = state.getIn(['generators',ownProps.indexN,'productionBase']);
    return {
        name: state.get('generators').get(ownProps.indexN).get("name"),
        amount:amount,
        producing: calculateProduction(productionBase,amount),
        nextCost: calculateCost(baseCost,rate, amount)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(buyGenerator(ownProps.gName,ownProps.indexN))
        }
    }
}

const GeneratorBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(Generator)

export default GeneratorBox;