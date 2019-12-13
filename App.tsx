import React, { useEffect } from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { AppRegistry, NativeModules } from 'react-native'

import Navigator from './navigators/MainNavigator'
import background from './store/reducers/background'

const rootReducer = combineReducers({
    background: background,
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

const App: () => any = () => {
    return (
        <Provider store={store}>
            <Navigator />
        </Provider>
    )
}

export default App
