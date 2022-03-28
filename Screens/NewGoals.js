import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	TextInput,
	Text,
} from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import { saveGoals } from "../Store/newgoals";

export default function NewGoals() {
	const [estimate, setEstimate] = useState("");
	const [maxWeight, setMaxWeight] = useState("");
	const [maxVolume, setMaxVolume] = useState("");
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const handleNewGoals = () => {
		dispatch(
			saveGoals({
				estimate,
				maxWeight,
				maxVolume,
			})
		);
		navigation.navigate("Profile");
	};
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#121212",
			}}
		>
			<View
				style={{
					flexDirection: "row",
					backgroundColor: "white",
					marginTop: 30,
					borderRadius: 8,
					marginLeft: 10,
					marginRight: 10,
				}}
			>
				<TextInput
					style={styles.input}
					value={estimate}
					onChangeText={setEstimate}
					placeholder="estimate..."
				></TextInput>
			</View>
			<View
				style={{
					flexDirection: "row",
					backgroundColor: "white",
					marginTop: 30,
					borderRadius: 8,
					marginLeft: 10,
					marginRight: 10,
				}}
			>
				<TextInput
					style={styles.input}
					value={maxWeight}
					onChangeText={setMaxWeight}
					placeholder="maxWeight..."
				></TextInput>
			</View>
			<View
				style={{
					flexDirection: "row",
					backgroundColor: "white",
					marginTop: 30,
					borderRadius: 8,
					marginLeft: 10,
					marginRight: 10,
				}}
			>
				<TextInput
					style={styles.input}
					value={maxVolume}
					onChangeText={setMaxVolume}
					placeholder="maxVolume..."
				></TextInput>
			</View>
			<TouchableOpacity onPress={() => handleNewGoals()}>
				<View style={styles.button}>
					<Text
						style={{
							alignSelf: "center",
							color: "white",
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Save New Goals
					</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate("Profile")}>
				<View style={styles.button}>
					<Text
						style={{
							alignSelf: "center",
							color: "white",
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Cancel
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
	},
	circle: {
		width: 150,
		height: 150,
		borderRadius: 100,
		alignSelf: "center",
		marginTop: 20,
	},
	upload: {
		alignSelf: "center",
		marginTop: -30,
		marginLeft: 50,
	},
	input: {
		padding: 14,
		borderColor: "#B9C4CA",
		color: "black",
		borderRadius: 4,
		fontSize: 16,
	},
	button: {
		backgroundColor: "#7c0000",
		marginTop: 30,
		borderRadius: 8,
		marginLeft: 10,
		marginRight: 10,
		padding: 15,
	},
});
