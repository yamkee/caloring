import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import Navigator from './navigators/MainNavigator'
import userData from './store/reducers/userData'
import alarm from './store/reducers/alarm'

const rootReducer = combineReducers({
    userData: userData,
    alarm: alarm,
})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
)

const App: () => any = () => {
    return (
        <Provider store={store}>
            <Navigator />
        </Provider>
    )
}

export default App
