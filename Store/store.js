import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import user from "./user";
const reducer = combineReducers({
	// here we will be adding reducers
	user: user,
});
export const store = configureStore({
	reducer,
});
