import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import mema from "../assets/mema.png";
import levels from "../assets/levels.png";

export default function Header() {
	return (
		<View
			style={{ flexDirection: "row", backgroundColor: "#7c0000", height: 80 }}
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
			<TouchableOpacity>
				<View style={{ flex: 1 }}>
					<Image
						source={levels}
						style={{
							height: 40,
							width: 40,
							marginTop: 30,
							marginLeft: 156,
							marginRight: 20,
						}}
					/>
				</View>
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
});
