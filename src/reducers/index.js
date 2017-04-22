import { List, Map } from 'immutable';
import { INCREASE_CLICK, BUY_GENERATOR, CHANGE_BUY_AMOUNT, INCREASE_TICK, initialState } from '../actions/index';

export default function reducers(state = initialState , action){
    switch(action.type){
        case INCREASE_CLICK:
            let cash = state.get('cash');
            cash = cash + state.get('cashPerClick');
            console.log("k");
            return state.set('cash', cash);
        case BUY_GENERATOR:
            const amountToBuy = state.get('buyAmount');
            console.log(action.generatorName, action.indexG)
            let amount = state.getIn(['generators', action.indexG, 'amount']) + amountToBuy;
            return state.setIn(['generators',action.indexG,'amount'],amount);
        case CHANGE_BUY_AMOUNT: 
            const current = state.get('buyAmount');
            let newAmount = 1;
            if(current === 1){
                newAmount = 5;
            }else if(current === 5){
                newAmount = 10;
            }
            return state.set('buyAmount',newAmount);
        case INCREASE_TICK:
            let amountForTick = state.get('generators').reduce(
                (total, value) => total + value.get('productionBase') * value.get('amount'),0);
            let totalCash = state.get('cash') + amountForTick;
            return state.set('cash', totalCash);
        default:
            return state;
    }

    return state;
}