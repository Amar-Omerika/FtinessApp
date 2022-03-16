import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Modal,
	Pressable,
} from "react-native";
import levels from "../assets/levels.png";
import { useNavigation } from "@react-navigation/core";
import icon from "../assets/iconModal.png";

export default function TrainingLevelModal() {
	const navigation = useNavigation();
	const [modalVisible, setModalVisible] = useState(false);
	const handleBeginner = () => {
		navigation.navigate("Beginner");
		setModalVisible(!modalVisible);
	};
	const handleIntermediate = () => {
		navigation.navigate("Intermediate");
		setModalVisible(!modalVisible);
	};
	const handleAdvanced = () => {
		navigation.navigate("Advanced");
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
							<TouchableOpacity onPress={() => handleBeginner()}>
								<Text style={styles.modalText}>Beginner</Text>
							</TouchableOpacity>
						</View>
						<View style={{ flexDirection: "row" }}>
							<Image source={icon} style={{ width: 40, height: 40 }} />
							<TouchableOpacity onPress={() => handleIntermediate()}>
								<Text style={styles.modalText}>Intermediate</Text>
							</TouchableOpacity>
						</View>
						<View style={{ flexDirection: "row" }}>
							<Image source={icon} style={{ width: 40, height: 40 }} />
							<TouchableOpacity onPress={() => handleAdvanced()}>
								<Text style={styles.modalText}>Advanced</Text>
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
					source={levels}
					style={{
						height: 40,
						width: 40,
						marginLeft: 156,
						marginRight: 20,
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
