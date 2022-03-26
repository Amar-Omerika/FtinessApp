import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import user from "./user";
import edit from "./edit";
import newgoals from "./newgoals";
const reducer = combineReducers({
	// here we will be adding reducers
	user: user,
	edit: edit,
	newgoals: newgoals,
});
const store = configureStore({
	reducer,
});
export default store;
