import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Dimensions,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import landingImage from "../assets/landingImage.png";
import logo from "../assets/logo.png";

export default function Landing() {
	const SCREEN_HEIGHT = Dimensions.get("screen").height;
	const navigation = useNavigation();
	const handleLogin = async () => {
		navigation.navigate("Login");
	};
	const handleRegister = async () => {
		navigation.navigate("Register");
	};
	return (
		<KeyboardAwareScrollView style={{ height: SCREEN_HEIGHT }}>
			<View style={styles.container}>
				<Image source={landingImage} style={{ height: 250, zIndex: -1 }} />

				<View style={styles.loginContainer}>
					<Image source={logo} style={styles.logo} />

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
	logo: {
		height: 150,
		width: 150,
		marginTop: 20,
		alignSelf: "center",
	},
});
