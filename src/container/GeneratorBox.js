import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import Generator from '../components/Generator';

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.get('generators').get(0).get("name"),
        amount:state.get('generators').get(0).get("amount"),
        producing:state.get('generators').get(0).get("productionBase"),
        nextCost:state.get('generators').get(0).get("initialCost")
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
     
    }
}

const GeneratorBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(Generator)

export default GeneratorBox;