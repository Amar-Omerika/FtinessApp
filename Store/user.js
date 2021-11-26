import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
	},
	reducers: {
		loginsucc: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.user = action.payload;
			AsyncStorage.setItem("user", JSON.stringify(action.payload));
		},
		logoutsucc: (state) => {
			state.user = null;
			AsyncStorage.removeItem("user");
		},
	},
});

// Action creators are generated for each case reducer function
export const { loginsucc, logoutsucc } = userSlice.actions;

export default userSlice.reducer;

export const login = (fullUserObj) => async (dispatch) => {
	try {
		dispatch(loginsucc(fullUserObj));
	} catch (e) {
		return console.error(e.message);
	}
};
export const logout = () => async (dispatch) => {
	try {
		dispatch(logoutsucc());
	} catch (e) {
		return console.error(e.message);
	}
};
