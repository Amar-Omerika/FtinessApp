import React, { useState } from "react";
import {
	Alert,
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	TextInput,
} from "react-native";
import { useDispatch } from "react-redux";
import { saveWeight } from "../Store/addWeight,";
export default function AddWeight() {
	const [modalVisible, setModalVisible] = useState(false);
	const [weight, setWeight] = useState("");
	const dispatch = useDispatch();
	const addWeight = () => {
		dispatch(
			saveWeight({
				weight,
			})
		);
		//samo dodamo push kada zelimo dodati kao array
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
								padding: 15,
								alignSelf: "center",
								fontSize: 20,
								marginTop: -20,
								fontWeight: "bold",
								color: "black",
							}}
						>
							Add Weight
						</Text>
						<View
							style={{
								flexDirection: "row",
								backgroundColor: "white",
								borderRadius: 8,
								padding: 5,
								marginLeft: 10,
								marginRight: 10,
								marginBottom: 20,
							}}
						>
							<TextInput
								style={styles.input}
								value={weight}
								onChangeText={setWeight}
								placeholder="Weight..."
							></TextInput>
						</View>
						<TouchableOpacity
							style={[styles.button, styles.buttonClose]}
							onPress={() => addWeight()}
						>
							<Text style={styles.textStyle}>Add</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
			<TouchableOpacity onPress={() => setModalVisible(true)}>
				<View style={styles.updateWeight}>
					<Text
						style={{
							color: "white",
							alignSelf: "center",
							marginVertical: 12,
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Add Weight
					</Text>
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
		marginTop: 90,
		backgroundColor: "#D9D7D7",
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
		marginBottom: 5,
	},

	buttonClose: {
		backgroundColor: "#7c0000",
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
	updateWeight: {
		width: 150,
		height: 50,
		backgroundColor: "#7c0000",
		marginTop: 20,
		alignSelf: "flex-end",
		marginRight: 10,
		borderRadius: 100,
	},
});
