import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import mema from "../assets/mema.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TrainingLevelModal from "../Modals/Modal";

export default function Header() {
	const [data, setData] = useState([]);
	const getDataFromUser = async () => {
		const value = await AsyncStorage.getItem("edit");
		let parsed = JSON.parse(value);
		if (value) {
			setData(parsed);
		}
	};

	useEffect(() => {
		let mounted = true;
		if (mounted) getDataFromUser();
		return () => (mounted = false);
	}, []);
	return (
		<View
			style={{ flexDirection: "row", backgroundColor: "#7c0000", height: 80 }}
		>
			<Image
				source={data.image}
				style={{
					height: 50,
					width: 50,
					marginTop: 20,
					marginLeft: 16,
					borderWidth: 2,
					borderColor: "white",
					borderRadius: 100,
				}}
			/>
			<View style={{ marginLeft: 20, marginTop: 40 }}>
				<Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
					Sessions
				</Text>
			</View>
			<TrainingLevelModal />
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
