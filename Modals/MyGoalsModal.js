import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Modal,
	Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import maxVolume from "../assets/maxVolume.png";
import maxWeight from "../assets/maxWeight.png";
import estimate from "../assets/estimate.png";
import flag from "../assets/flag.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function MyGoalsModal() {
	const [data, setData] = useState([]);
	const navigation = useNavigation();
	const [modalVisible, setModalVisible] = useState(false);
	const getDataFromUser = async () => {
		const value = await AsyncStorage.getItem("newgoals");
		let parsed = JSON.parse(value);
		if (value) {
			setData(parsed);
		}
		//console.log(parsed);
	};
	useEffect(() => {
		let mounted = true;
		if (mounted) getDataFromUser();
		return () => (mounted = false);
	}, []);
	const AddGoals = () => {
		navigation.navigate("NewGoals");
		setModalVisible(!modalVisible);
	};

	return (
		<View style={styles.centeredView}>
			<Modal
				animationType="fade"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text
							style={{
								marginBottom: 10,
								fontSize: 20,
								fontWeight: "bold",
								color: "white",
							}}
						>
							My Goals
						</Text>
						<View
							style={{
								backgroundColor: "white",
								borderRadius: 10,
								marginBottom: 10,
							}}
						>
							<View style={{ flexDirection: "row" }}>
								<Image source={estimate} style={styles.icons} />
								<Text style={styles.modalText}>Estimate 1RM</Text>
								<Text
									style={{
										marginLeft: 25,
										marginVertical: 10,

										textAlign: "center",
										fontWeight: "bold",
									}}
								>
									{data.estimate} Kg
								</Text>
							</View>
							<View style={{ flexDirection: "row" }}>
								<Image source={maxWeight} style={styles.icons} />
								<Text style={styles.modalText}>Max Weight</Text>
								<Text style={styles.modalValues}>{data.maxWeight} Kg</Text>
							</View>
							<View style={{ flexDirection: "row" }}>
								<Image source={maxVolume} style={styles.icons} />
								<Text style={styles.modalText}>Max Volume</Text>
								<Text style={styles.modalValues}>{data.maxVolume} Kg</Text>
							</View>
						</View>
						<View style={{ flexDirection: "row" }}>
							<TouchableOpacity
								style={[styles.button, styles.buttonClose]}
								onPress={() => setModalVisible(!modalVisible)}
							>
								<Text style={styles.textStyle}>Close</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={[styles.button, styles.buttonAdd]}
								onPress={() => AddGoals()}
							>
								<Text style={styles.textStyle}>Add New Goals</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>

			<TouchableOpacity onPress={() => setModalVisible(true)}>
				<View style={styles.timeSpent}>
					<View style={{ flexDirection: "row" }}>
						<Image
							source={flag}
							style={{ marginTop: 10, marginLeft: 10, height: 40, width: 30 }}
						/>
						<Text
							style={{
								marginLeft: 10,
								marginTop: 20,
								fontSize: 20,
								fontWeight: "bold",
							}}
						>
							MyGoals {">"}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		marginTop: 151,
		backgroundColor: "#C4C4C4",
		borderRadius: 20,
		padding: 35,
		paddingBottom: 5,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		width: 300,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},

	buttonClose: {
		backgroundColor: "#7C0000",
		width: 100,
		height: 40,
	},
	buttonAdd: {
		backgroundColor: "#7C0000",
		width: 100,
		marginLeft: 30,
		//marginLeft: 150,
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginVertical: 10,
		marginLeft: 10,
		textAlign: "center",
		fontWeight: "bold",
	},
	modalValues: {
		marginVertical: 10,
		flex: 1,
		alignSelf: "flex-end",
		textAlign: "center",
		fontWeight: "bold",
	},
	timeSpent: {
		width: 166,
		height: 70,
		backgroundColor: "white",
		borderRadius: 10,
		marginLeft: 20,
	},
	icons: {
		width: 30,
		height: 30,
		marginLeft: 10,
		marginTop: 5,
	},
});
