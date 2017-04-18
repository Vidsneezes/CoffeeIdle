import { List, Map } from 'immutable';
import { INCREASE_CLICK, BUY_GENERATOR, CHANGE_BUY_AMOUNT, INCREASE_TICK, initialState } from './actions';

export function reducers(state = initialState , action){
    switch(action.type){
        case INCREASE_CLICK:
            let cash = state.get('cash');
            cash = cash + state.get('cashPerClick');
            state.set('cash', cash);
            return state;
        case BUY_GENERATOR:
            const amountToBuy = state.get('buyAmount');
            const generatorIndex = state.get('generators').findIndex(generator => {
                return generator.get('name') === action.generatorName;
            });
            let amount = state.getIn(['generators', generatorIndex, 'amount']) + amountToBuy;
            state.setIn(['generators',generatorIndex,'amount'],amount);
            return state;
        case CHANGE_BUY_AMOUNT: 
            const current = state.get('buyAmount');
            let newAmount = 1;
            if(current === 1){
                newAmount = 5;
            }else if(current === 5){
                newAmount = 10;
            }
            state.set('buyAmount',newAmount);
            return state;
        default:
            return state;
    }

    return state;
}