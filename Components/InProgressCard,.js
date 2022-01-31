import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import progress from "../assets/Progress.png";
export default function InProgressCard() {
	return (
		<View style={styles.container}>
			<View style={styles.inProgress}>
				<View style={{ flexDirection: "row" }}>
					<Image source={progress} style={{ marginTop: 10, marginLeft: 10 }} />
					<Text
						style={{
							marginLeft: 10,
							marginTop: 20,
							fontSize: 15,
							fontWeight: "bold",
						}}
					>
						In Progress
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
						2
					</Text>
					<Text
						style={{
							marginLeft: 10,
							marginTop: 25,
							fontSize: 15,
						}}
					>
						Workouts
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
	inProgress: {
		width: 166,
		height: 105,
		backgroundColor: "white",
		borderRadius: 10,
		marginTop: 50,
		marginTop: 80,
	},
});
