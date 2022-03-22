import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

export const editSlice = createSlice({
	name: "edit",
	initialState: {
		edit: null,
	},
	reducers: {
		save: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.user = action.payload;
			AsyncStorage.setItem("edit", JSON.stringify(action.payload));
		},
		cancel: (state) => {
			state.edit = null;
			AsyncStorage.removeItem("edit");
		},
	},
});

// Action creators are generated for each case reducer function
export const { save, cancel } = editSlice.actions;

export default editSlice.reducer;

export const saveChanges = (fullUserObj) => async (dispatch) => {
	try {
		dispatch(save(fullUserObj));
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
