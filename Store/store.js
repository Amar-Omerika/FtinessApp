import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import user from "./user";
import edit from "./edit";
const reducer = combineReducers({
	// here we will be adding reducers
	user: user,
	edit: edit,
});
const store = configureStore({
	reducer,
});
export default store;
