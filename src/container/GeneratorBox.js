import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import Generator from '../components/Generator';

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.get('generators').get(ownProps.indexN).get("name"),
        amount:state.get('generators').get(ownProps.indexN).get("amount"),
        producing:state.get('generators').get(ownProps.indexN).get("productionBase"),
        nextCost:state.get('generators').get(ownProps.indexN).get("initialCost")
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