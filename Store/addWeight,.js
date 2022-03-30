import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

export const addWeight = createSlice({
	name: "addWeight",
	initialState: {
		addWeight: null,
	},
	reducers: {
		save: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.addWeight = action.payload;
			AsyncStorage.setItem("addWeight", JSON.stringify(action.payload));
		},
	},
});

// Action creators are generated for each case reducer function
export const { save } = addWeight.actions;

export default addWeight.reducer;

export const saveWeight = (fullUserObj) => async (dispatch) => {
	try {
		dispatch(save(fullUserObj));
	} catch (e) {
		return console.error(e.message);
	}
};
