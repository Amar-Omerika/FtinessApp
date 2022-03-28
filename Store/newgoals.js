import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

export const newgoalsSlice = createSlice({
	name: "newgoals",
	initialState: {
		newgoals: null,
	},
	reducers: {
		saveNewGoals: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.newgoals = action.payload;
			AsyncStorage.setItem("newgoals", JSON.stringify(action.payload));
		},
		cancel: (state) => {
			state.newgoals = null;
			AsyncStorage.removeItem("newgoals");
		},
	},
});

// Action creators are generated for each case reducer function
export const { saveNewGoals, cancel } = newgoalsSlice.actions;

export default newgoalsSlice.reducer;

export const saveGoals = (fullUserObj) => async (dispatch) => {
	try {
		dispatch(saveNewGoals(fullUserObj));
	} catch (e) {
		return console.error(e.message);
	}
};
export const canceling = () => async (dispatch) => {
	try {
		dispatch(cancel());
	} catch (e) {
		return console.error(e.message);
	}
};
