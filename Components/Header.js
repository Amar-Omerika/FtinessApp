import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import mema from "../assets/mema.png";
export default function Header() {
	return (
		<View
			style={{ flexDirection: "row", backgroundColor: "#4880F2", height: 80 }}
		>
			<Image
				source={mema}
				style={{
					height: 40,
					width: 40,
					marginTop: 30,
					marginLeft: 16,
				}}
			/>
			<View style={{ marginLeft: 20, marginTop: 40 }}>
				<Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
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
