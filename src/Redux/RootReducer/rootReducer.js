import { combineReducers } from "redux";
import formReducer from "../Reducer/formReducer"
import purchaseCompleteReducer from "../Reducer/purchaseCompleteReducer";

const rootReducer = combineReducers ({
    formData : formReducer,
    completed: purchaseCompleteReducer

})


export default rootReducer