import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../RootReducer/rootReducer";

const middleware = [thunk, logger];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export {store}