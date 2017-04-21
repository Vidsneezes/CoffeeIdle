import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import Generator from '../components/Generator';

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.get('generators').get(0).get("name")
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