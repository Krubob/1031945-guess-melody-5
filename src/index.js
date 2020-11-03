import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
import {reducer} from "./store/reducer";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {composeWithDevTools} from "redux-devtools-extension";

const api = createAPI(
    () => store.dispatch()
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);

// store.subscribe(() => console.log(store.getState()));
