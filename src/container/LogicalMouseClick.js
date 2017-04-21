import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import ClickerArea from '../components/ClickerArea';
import { increaseClick } from '../actions/index';

const mapStateToProps = (state, ownProps) => {
    return {
        totalCash: state.get('cash'),
        cashPreClick: state.get('cashPerClick')
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(increaseClick())
        }
    }
}

const LogicalMouseClick = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClickerArea)

export default LogicalMouseClick;