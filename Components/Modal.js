import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import levels from "../assets/levels.png";

export default function Modal() {
	return (
		<View
			style={{ flexDirection: "row", backgroundColor: "#7c0000", height: 80 }}
		>
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
