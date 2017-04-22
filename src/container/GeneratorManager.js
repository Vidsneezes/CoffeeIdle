import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import GeneratorsDisplay from '../components/GeneratorsDisplay';

const mapStateToProps = (state, ownProps) => {
    return {
        gens: state.get('generators')
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

const GeneratorManager = connect(
    mapStateToProps,
    mapDispatchToProps
)(GeneratorsDisplay)

export default GeneratorManager;