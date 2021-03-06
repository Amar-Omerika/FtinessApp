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
import { useDispatch } from "react-redux";
import landingImage from "../assets/landingImage.png";
import person from "../assets/person.png";
import passwordIcon from "../assets/passwordIcon.png";
import { loginsucc } from "../Store/user";
import { useNavigation } from "@react-navigation/core";
import Message from "../Components/Message";
export default function Login() {
	const navigation = useNavigation();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState(false);
	const dispatch = useDispatch();
	const handleLogin = async () => {
		if (!username || !password) {
			if (!message) {
				setMessage("Please check your inputs");
			}
			return;
		}
		dispatch(
			loginsucc({
				username,
				password,
			})
		);

		navigation.navigate("Sessions");
	};
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
		>
			<View style={styles.container}>
				<Image source={landingImage} style={{ height: 250, zIndex: -1 }} />
				<View style={{ marginLeft: 10 }}>
					<Text
						style={{
							fontSize: 30,
							zIndex: 1,
							color: "#BA0000",
							marginTop: -60,
							fontWeight: "bold",
						}}
					>
						Login
					</Text>
				</View>
				<View style={styles.loginContainer}>
					<View style={{ alignSelf: "center", marginTop: 45 }}>
						<Text style={{ fontSize: 25, fontWeight: "bold" }}>
							Make Yourself Fit
						</Text>
					</View>
					<View style={styles.inputContainer}>
						<View
							style={{
								flexDirection: "row",
								backgroundColor: "#C0C0C0",
								marginTop: 30,
								borderRadius: 8,
							}}
						>
							<Image
								source={person}
								style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
							/>
							<TextInput
								style={{
									width: 290,
									height: 50,
									fontSize: 18,
									color: "white",
								}}
								value={username}
								onChangeText={setUsername}
								placeholder="Username..."
							></TextInput>
						</View>
						<View
							style={{
								flexDirection: "row",
								backgroundColor: "#C0C0C0",
								marginTop: 30,
								borderRadius: 8,
							}}
						>
							<Image
								source={passwordIcon}
								style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
							/>
							<TextInput
								style={{
									width: 290,
									height: 50,
									fontSize: 18,
									color: "white",
								}}
								secureTextEntry={true}
								value={password}
								onChangeText={setPassword}
								placeholder="Password..."
							></TextInput>
						</View>
					</View>

					<TouchableOpacity
						style={{
							backgroundColor: "#3e0000",
							marginTop: 30,
							alignItems: "center",
							height: 50,
							width: 229,
							borderRadius: 50,
							alignSelf: "center",
						}}
						onPress={() => handleLogin()}
					>
						<Text
							style={{
								color: "white",
								fontWeight: "bold",
								padding: 15,
								fontSize: 16,
							}}
						>
							Login
						</Text>
					</TouchableOpacity>
					<View style={{ alignSelf: "center", marginTop: 20 }}>
						<TouchableOpacity onPress={() => navigation.navigate("Register")}>
							<Text
								style={{ color: "#C0C0C0", fontWeight: "bold", fontSize: 15 }}
							>
								Dont have account? Sign up
							</Text>
						</TouchableOpacity>
					</View>
					<Message message={message} />
				</View>
			</View>
		</KeyboardAvoidingView>
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
