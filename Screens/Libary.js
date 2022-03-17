import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Exercises from "../Components/Exercises";
import LibaryHeader from "../Components/LibaryHeader";
const naziv = "Naziv";
export default function Libary() {
	return (
		<View style={{ flex: 1 }}>
			{/*<LibaryHeader />*/}
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
