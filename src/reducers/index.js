import { List, Map } from 'immutable';
import { INCREASE_CLICK, BUY_GENERATOR, CHANGE_BUY_AMOUNT, INCREASE_TICK, initialState } from '../actions/index';

//TODO apply cost formulas
//TODO add not enough money conditions cleared
//TODO maybe but boostrap, for single page

function calculateCost(baseCost,rate,owned){
  return Math.round((baseCost * Math.pow(rate,owned) * 100)) /100;
}

function calculateProduction(productionBase, amount){
  return productionBase * amount;
}


export default function reducers(state = initialState , action){
    let cash;
    switch(action.type){
        case INCREASE_CLICK:
            cash = state.get('cash');
            cash = cash + state.get('cashPerClick') * 0.04;
            return state.set('cash', cash);
        case BUY_GENERATOR:
            const baseCost = state.getIn(['generators',action.indexG, 'baseCost']);
            const rate = state.getIn(['generators',action.indexG, 'rate']);
            const amount = state.getIn(['generators',action.indexG, 'amount']);
            const cost = calculateCost(baseCost,rate,amount);
            cash = state.get('cash');
            if(cash >= cost){
                let cashState = state.set('cash',cash - cost);
                const amountToBuy = state.get('buyAmount');
                let amount = cashState.getIn(['generators', action.indexG, 'amount']) + amountToBuy;
                return cashState.setIn(['generators',action.indexG,'amount'],amount);
            }
            return state;
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
            let cashAdd = 0;
            const generators = state.get('generators');
            generators.forEach((generator)=>{
                cashAdd = cashAdd + calculateProduction(generator.get('productionBase'),generator.get('amount'));
            });
            let totalCash = state.get('cash') + cashAdd;
            state = state.set('cash', totalCash);
            state = state.set('cashPerClick',cashAdd);
            return state;
        default:
            return state;
    }

    return state;
}