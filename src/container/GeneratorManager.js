import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

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
)(GeneratorManager)

export default GeneratorManager;