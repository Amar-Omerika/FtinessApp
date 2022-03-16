import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import TrainingLevelModal from "../Modals/Modal";

export default function LibaryHeader() {
	return (
		<View
			style={{
				flexDirection: "row",
				backgroundColor: "#7c0000",
				height: 80,
			}}
		>
			<View style={{ marginLeft: 20, marginTop: 25 }}>
				<Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
					Libary
				</Text>
			</View>
			<View style={{ marginLeft: 70 }}>
				<TrainingLevelModal />
			</View>
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
