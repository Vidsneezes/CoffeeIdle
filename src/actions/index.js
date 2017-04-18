import { List, Map } from 'immutable';

export const INCREASE_CLICK = "INCREASE_CLICK";
export const BUY_GENERATOR = "BUY_GENERATOR";
export const INCREASE_TICK = "INCREASE_TICK";
export const CHANGE_BUY_AMOUNT = "CHANGE_BUY_AMOUNT"; 

export const initialState = Map({
    cash:0,
    buyAmount: 1,
    cashPerClick: 1,
    generators: List([
        Map({
            name:"Coffee Machine",
            baseCost:6,
            rate:1.07,
            productionBase:3,
            amount:0,
            initialCost:0
        })
    ])
})

export const changeBuyAmount = () => ({
    type: CHANGE_BUY_AMOUNT
})

export const increaseClick = () => ({
    type: INCREASE_CLICK
})

export const buyGenerator = (generatorName) => ({
    type: BUY_GENERATOR,
    generatorName
})

export const increaseTick = () => ({
    type: INCREASE_TICK
})
