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
	Dimensions,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import landingImage from "../assets/landingImage.png";
import mailIcon from "../assets/mailIcon.png";
import passwordIcon from "../assets/passwordIcon.png";
import profileIcon from "../assets/person.png";
import Message from "../Components/Message";
export default function Register({ navigation }) {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState(false);
	const SCREEN_HEIGHT = Dimensions.get("screen").height;
	const handleRegister = async () => {
		if (!email || !password || !username) {
			if (!message) {
				setMessage("Please check your inputs");
			}
			return;
		}
		navigation.navigate("Login");
	};
	return (
		<KeyboardAwareScrollView style={{ height: SCREEN_HEIGHT }}>
			<View style={styles.container}>
				<Image source={landingImage} style={{ height: 250, zIndex: -1 }} />
				<View style={{ marginLeft: 10 }}>
					<Text
						style={{
							fontSize: 30,
							zIndex: 1,
							color: "#4267B2",
							marginTop: -60,
							fontWeight: "bold",
						}}
					>
						Sign Up
					</Text>
				</View>
				<View style={styles.loginContainer}>
					<View style={{ alignSelf: "center", marginTop: 45 }}>
						<Text style={{ fontSize: 25, fontWeight: "bold" }}>
							Shape your body
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
								source={profileIcon}
								style={{ marginTop: 10, marginLeft: 5, marginRight: 10 }}
							/>
							<TextInput
								style={{
									width: 290,
									height: 50,
									fontSize: 18,
									color: "white",
								}}
								secureTextEntry={true}
								value={username}
								onChangeText={setUsername}
								placeholder="Username..."
							></TextInput>
						</View>
						<View
							style={{
								flexDirection: "row",
								backgroundColor: "#C0C0C0",
								marginTop: 12,
								borderRadius: 8,
							}}
						>
							<Image
								source={mailIcon}
								style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
							/>
							<TextInput
								style={{
									width: 290,
									height: 50,
									fontSize: 18,
									color: "white",
								}}
								value={email}
								onChangeText={setEmail}
								placeholder="Email..."
							></TextInput>
						</View>
						<View
							style={{
								flexDirection: "row",
								backgroundColor: "#C0C0C0",
								marginTop: 12,
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
							backgroundColor: "#4267B2",
							marginTop: 30,
							alignItems: "center",
							height: 50,
							width: 229,
							borderRadius: 50,
							alignSelf: "center",
						}}
						onPress={() => handleRegister()}
					>
						<Text
							style={{
								color: "white",
								fontWeight: "bold",
								padding: 15,
								fontSize: 16,
							}}
						>
							Sign Up
						</Text>
					</TouchableOpacity>
					<View style={{ alignSelf: "center", marginTop: 10 }}>
						<TouchableOpacity onPress={() => navigation.navigate("Login")}>
							<Text
								style={{ color: "#C0C0C0", fontWeight: "bold", fontSize: 15 }}
							>
								Already have account ? Login
							</Text>
						</TouchableOpacity>
					</View>
					<Message message={message} />
				</View>
			</View>
		</KeyboardAwareScrollView>
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
		height: 487,
	},
	inputContainer: {
		alignSelf: "center",
	},
});
