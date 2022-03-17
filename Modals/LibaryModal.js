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
import filter from "../assets/filter-icon.png";
import { useNavigation } from "@react-navigation/core";
import icon from "../assets/iconModal.png";

export default function LibaryModal() {
	const navigation = useNavigation();
	const [data, setData] = useState([]);

	const filterCategory = (categoryName) => {
		const result = data.filter((currentData) => {
			return currentData.category === categoryName;
		});
		setData(result);
		console.log(result);
		setModalVisible(!modalVisible);
	};

	const getData = async () => {
		const res = await fetch(
			"https://run.mocky.io/v3/8044eee4-8cb4-4a9e-9b55-fbf15b112b8e"
		);
		const answer = await res.json();
		setData(answer);
	};
	useEffect(() => {
		getData();
	}, []);
	const [modalVisible, setModalVisible] = useState(false);
	const handleBeginner = () => {
		setModalVisible(!modalVisible);
	};
	const handleIntermediate = () => {
		setModalVisible(!modalVisible);
	};
	const handleAdvanced = () => {
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
							style={{ marginBottom: 10, fontSize: 20, fontWeight: "bold" }}
						>
							Training levels
						</Text>
						<View style={{ flexDirection: "row" }}>
							<Image source={icon} style={{ width: 40, height: 40 }} />
							<TouchableOpacity onPress={() => filterCategory("Legs")}>
								<Text style={styles.modalText}>Legs</Text>
							</TouchableOpacity>
						</View>
						<View style={{ flexDirection: "row" }}>
							<Image source={icon} style={{ width: 40, height: 40 }} />
							<TouchableOpacity onPress={() => handleIntermediate()}>
								<Text style={styles.modalText}>Chest</Text>
							</TouchableOpacity>
						</View>
						<View style={{ flexDirection: "row" }}>
							<Image source={icon} style={{ width: 40, height: 40 }} />
							<TouchableOpacity onPress={() => handleAdvanced()}>
								<Text style={styles.modalText}>Back</Text>
							</TouchableOpacity>
						</View>
						<TouchableOpacity
							style={[styles.button, styles.buttonClose]}
							onPress={() => setModalVisible(!modalVisible)}
						>
							<Text style={styles.textStyle}>Close</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>

			<TouchableOpacity
				style={[styles.buttonOpen]}
				onPress={() => setModalVisible(true)}
			>
				<Image
					source={filter}
					style={{
						height: 30,
						width: 30,
						marginLeft: 190,
						marginRight: 20,
						marginVertical: 10,
					}}
				/>
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
		margin: 20,
		backgroundColor: "white",
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
		marginLeft: 150,
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
	},
});
