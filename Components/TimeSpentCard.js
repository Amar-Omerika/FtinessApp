import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import stopwatch from "../assets/stopwatch.png";
export default function TimeSpentCard() {
	return (
		<View style={styles.container}>
			<View style={styles.timeSpent}>
				<View style={{ flexDirection: "row" }}>
					<Image source={stopwatch} style={{ marginTop: 10, marginLeft: 10 }} />
					<Text
						style={{
							marginLeft: 10,
							marginTop: 20,
							fontSize: 15,
							fontWeight: "bold",
						}}
					>
						Time Spent
					</Text>
				</View>
				<View style={{ flexDirection: "row" }}>
					<Text
						style={{
							marginLeft: 20,
							marginTop: 20,
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						90
					</Text>
					<Text
						style={{
							marginLeft: 10,
							marginTop: 25,
							fontSize: 15,
						}}
					>
						Minutes
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
		height: 105,
		backgroundColor: "white",
		borderRadius: 10,
		marginTop: 5,
		marginRight: 20,
	},
});
