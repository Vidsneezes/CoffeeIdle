import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import ClickerArea from '../components/ClickerArea';

const mapStateToProps = (state, ownProps) => {
    return {
        grid: state.get('grid').toJS(),
        done: state.get('done')
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch()
        }
    }
}

const LogicalMouseClick = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClickerArea)

export default LogicalMouseClick;