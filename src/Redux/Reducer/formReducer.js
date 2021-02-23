import { FormType } from "../Actions/Types/FormType";
import FORM_STATE from "../State/formState";

const forReducer =( state = FORM_STATE, action) => {
    switch(action.type) {
        case FormType.CHANGE:
            return {
                ...state,
                name: action.payload,
                email: action.payload,
                address1: action.payload,
                address2: action.payload,
                localGovernment: action.payload,
                state: action.payload,
                nameOnCard: action.payload,
                cardType: action.payload,
                cardDetails: action.payload,
                expiryDate: action.payload,
                cvv: action.payload,
            };

            default:
                return state
    }
}

export default forReducer