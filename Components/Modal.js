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
					Alert.alert("Modal has been closed.");
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<TouchableOpacity onPress={() => handleBeginner()}>
							<Text style={styles.modalText}>Beginner</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => handleIntermediate()}>
							<Text style={styles.modalText}>Intermediate</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => handleAdvanced()}>
							<Text style={styles.modalText}>Advanced</Text>
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
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},

	buttonClose: {
		backgroundColor: "#2196F3",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
});
