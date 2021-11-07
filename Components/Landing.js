import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import landingImage from "../assets/landingImage.png";
import logo from "../assets/logo.png";

export default function Landing() {
	return (
		<View style={styles.container}>
			<Image source={landingImage} style={{ height: 250, zIndex: -1 }} />
			<View style={styles.loginContainer}>
				<Image source={logo} style={styles.logo} />
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
						backgroundColor: "#4267B2",
						marginTop: 30,
						alignItems: "center",
						height: 50,
						width: 229,
						borderRadius: 50,
						alignSelf: "center",
					}}
				>
					<Text
						style={{
							color: "white",
							fontWeight: "bold",
							padding: 15,
							fontSize: 16,
						}}
					>
						Register
					</Text>
				</TouchableOpacity>
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
	logo: {
		height: 150,
		width: 150,
		marginTop: 20,
		alignSelf: "center",
	},
});
