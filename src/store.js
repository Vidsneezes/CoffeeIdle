import { List, Map } from 'immutable';

export const initialState = Map({
    cash:0,
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