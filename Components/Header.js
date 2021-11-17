import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	TextInput,
	KeyboardAvoidingView,
	ScrollView,
} from "react-native";
import landingImage from "../assets/landingImage.png";
import mailIcon from "../assets/mailIcon.png";
import passwordIcon from "../assets/passwordIcon.png";

export default function Header({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<View style={{ flexDirection: "row" }}>
			<View style={{ marginVertical: 20, marginLeft: 20 }}>
				<Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>
					Sessions
				</Text>
			</View>
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
