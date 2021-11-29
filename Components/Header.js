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
import mema from "../assets/mema.png";
export default function Header() {
	return (
		<View style={{ flexDirection: "row", backgroundColor: "#4267B2" }}>
			<Image
				source={mema}
				style={{
					height: 70,
					width: 70,
					marginTop: 40,
					marginBottom: 10,
					marginLeft: 10,
				}}
			/>
			<View style={{ marginTop: 60, marginLeft: 30 }}>
				<Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
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
