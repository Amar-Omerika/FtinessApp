import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RouteStack from "./routes/routeStack";
import store from "./Store/store";
import { Provider } from "react-redux";

export default function App() {
	return (
		<Provider store={store}>
			<RouteStack />
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
