import React from "react";
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

import Main from './containers/Main'

const store = createStore(reducer,
    compose(
        applyMiddleware(
            thunk,
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    )
)

render((
    <Provider store={store}>
        <Main/>
    </Provider>
), document.getElementById('app'));
