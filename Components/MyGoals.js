import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import flag from "../assets/flag.png";
export default function MyGoals() {
	return (
		<View style={styles.container}>
			<View style={styles.timeSpent}>
				<View style={{ flexDirection: "row" }}>
					<Image
						source={flag}
						style={{ marginTop: 10, marginLeft: 10, height: 40, width: 30 }}
					/>
					<Text
						style={{
							marginLeft: 10,
							marginTop: 20,
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						MyGoals {">"}
					</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	timeSpent: {
		width: 166,
		height: 70,
		backgroundColor: "white",
		borderRadius: 10,
		marginTop: 15,
		marginLeft: 20,
	},
});
