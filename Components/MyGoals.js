import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import MyGoalsModal from "../Modals/MyGoalsModal";
import flag from "../assets/flag.png";
export default function MyGoals() {
	return (
		<View style={styles.container}>
			<MyGoalsModal />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: -10,
	},
});
