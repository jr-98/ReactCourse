import { combineReducers } from "redux";
import { customers } from "./customers";
import { reducer as reducerForm } from "redux-form";
import { CUSTOMER_EDIT, CUSTOMER_LIST, CUSTOMER_VIEW } from "constants/permissions";
const user = (state, action) => ({
    permissions: [CUSTOMER_LIST, CUSTOMER_VIEW, CUSTOMER_EDIT] //tODOS LOS PERMISOS
    // permissions: [CUSTOMER_LIST, CUSTOMER_VIEW]
    // permissions: [CUSTOMER_LIST]
    // permissions: []
});
export default combineReducers({
    customers,
    form: reducerForm,
    user: user,
})