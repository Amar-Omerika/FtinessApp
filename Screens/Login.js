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
import mailIcon from "../assets/mailIcon.png";
import passwordIcon from "../assets/passwordIcon.png";
import { loginsucc } from "../Store/user";
import { useNavigation } from "@react-navigation/core";

export default function Login() {
	const navigation = useNavigation();
	const [email, setEmail] = useState("mojmail@gmail.com");
	const [password, setPassword] = useState("12341234");
	const dispatch = useDispatch();
	const handleLogin = async () => {
		dispatch(
			loginsucc({
				email,
				password,
			})
		);
		navigation.navigate("Home");
	};
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
		>
			<View style={styles.container}>
				<Image source={landingImage} style={{ height: 250, zIndex: -1 }} />

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
							backgroundColor: "#4267B2",
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
