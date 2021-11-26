import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	TextInput,
} from "react-native";

export default function Message({ message }) {
	return (
		<View style={{ alignSelf: "center" }}>
			<Text
				style={{
					fontSize: 15,
					color: "white",
					fontWeight: "bold",
					color: "red",
					marginTop: 10,
				}}
			>
				{message}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	loginContainer: {
		backgroundColor: "white",
		borderRadius: 20,
		marginTop: -20,
		flex: 1,
	},
	inputContainer: {
		alignSelf: "center",
	},
});
