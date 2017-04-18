import { List, Map } from 'immutable';
import { INCREASE_CLICK, BUY_GENERATOR, INCREASE_TICK, initialState } from './actions';

export function reducers(state = initialState , action){
    switch(action.type){
        case INCREASE_CLICK:
            let cash = state.get('cash');
            cash = cash + state.get('cashPerClick');
            state.set('cash', cash);
        return state;
        case BUY_GENERATOR:

        return state;
    }

    return state;
}