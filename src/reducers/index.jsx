import { combineReducers } from "redux";
import { customers } from "./customers";
import { reducer as reducerForm } from "redux-form";

export default combineReducers({
    customers,
    form: reducerForm,
})