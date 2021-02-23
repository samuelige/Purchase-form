import PurchaseCompleteType from "../Types/PurchaseCompleteType"

const PurchaseCompleteAction = (payload) => ({
    type: PurchaseCompleteType.PURCHASE_COMPLETE_ACTION_TYPE,
    payload : payload
})

export default PurchaseCompleteAction