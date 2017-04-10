const initialState = {
    configs: require('Assets/configs.json'),
    cuts: require('Assets/cuts.json'),
    characters: require('Assets/characters.json'),
    spotlight: [ // TODO, make this depend on url to debug
        null,
        null,
        null,
        0
    ],
    cut: require('Assets/cuts.json')[0],
    pageOn: "start"
};