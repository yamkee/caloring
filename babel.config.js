module.exports = function(api) {
    api.cache(true)
    return {
        presets: ['babel-preset-expo', 'module:react-native-dotenv'],
        // plugins: [
        //     'babel-plugin-styled-components',
        //     [
        //         'module-resolver',
        //         {
        //             root: ['./'],
        //             alias: {
        //                 '@components': './components',
        //                 '@constants': './constants',
        //                 '@functions': './functions',
        //                 '@navigators': './navigators',
        //                 '@store': './store',
        //                 '@asset': './asset',
        //             },
        //         },
        //     ],
        // ],
    }
}
