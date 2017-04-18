import { List, Map } from 'immutable';
import { INCREASE_CLICK, initialState } from './actions';

let cashPerClick = 1;

export function reducers(state = initialState , action){
    switch(action.type){
        case INCREASE_CLICK:
            let cash = state.get('cash');
            cash = cash + cashPerClick;
            state.set('cash', cash);
        return state;
    }

    return state;
}