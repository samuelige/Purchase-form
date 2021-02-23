import PurchaseCompleteType from "../Actions/Types/PurchaseCompleteType"
import PURCHASE_COMPLETED from "../State/purchaseCompleteState"


const purchaseCompleteReducer = (completed = PURCHASE_COMPLETED, action) => {
    switch (action.type) {
        case PurchaseCompleteType.PURCHASE_COMPLETE_ACTION_TYPE: 
        return {
            ...completed, 
            purchase: action.payload,
        };
        default:
            return completed
    }
}

export default purchaseCompleteReducer
