import { List, Map } from 'immutable';

export const INCREASE_CLICK = "INCREASE_CLICK";
export const BUY_GENERATOR = "BUY_GENERATOR";
export const INCREASE_TICK = "INCREASE_TICK";
export const CHANGE_BUY_AMOUNT = "CHANGE_BUY_AMOUNT"; 

export const initialState = Map({
    cash:50000,
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
        }),
         Map({
            name:"Barista Worker",
            baseCost:90,
            rate:1.3,
            productionBase:27,
            amount:0,
            initialCost:117
        }),Map({
            name:"Coffee Stand",
            baseCost:720,
            rate:1.28,
            productionBase:86,
            amount:0,
            initialCost:936
        }),
        Map({
            name:"Coffee Shop",
            baseCost:6480,
            rate:1.26,
            productionBase:778,
            amount:0,
            initialCost:16200
        }),
        Map({
            name:"Mall Coffee Kiosko",
            baseCost:45360,
            rate:1.24,
            productionBase:5443,
            amount:0,
            initialCost:68040
        }),
        Map({
            name:"Big Gulp Coffee Machine",
            baseCost:362880,
            rate:1.23,
            productionBase:43546,
            amount:0,
            initialCost:616896
        }),
        Map({
            name:"Professional Barista Worker",
            baseCost:3265920,
            rate:1.22,
            productionBase:391910,
            amount:0,
            initialCost:6205248
        }),
        Map({
            name:"Coffee Store Chain",
            baseCost:39191040,
            rate:1.20,
            productionBase:4702925,
            amount:0,
            initialCost:78382080
        }),
        Map({
            name:"Coffee Store Franchise",
            baseCost:352719360,
            rate:1.18,
            productionBase:42326323,
            amount:0,
            initialCost:811254528
        })
    ])
})

export const changeBuyAmount = () => ({
    type: CHANGE_BUY_AMOUNT
})

export const increaseClick = () => ({
    type: INCREASE_CLICK
})

export const buyGenerator = (generatorName, indexG) => ({
    type: BUY_GENERATOR,
    generatorName,
    indexG
})

export const increaseTick = () => ({
    type: INCREASE_TICK
})
