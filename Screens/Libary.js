import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Exercises from "../Components/Exercises";

export default function Libary() {
	return (
		<View style={{ flex: 1 }}>
			<Exercises />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
		marginTop: 50,
	},
});
