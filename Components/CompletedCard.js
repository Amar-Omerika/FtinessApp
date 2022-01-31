import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import biceps from "../assets/biceps.png";
export default function CompletedWorkouts() {
	return (
		<View style={styles.container}>
			<View>
				<Text
					style={{
						color: "white",
						fontSize: 30,
						marginLeft: 20,
						marginTop: 20,
					}}
				>
					Profile
				</Text>
			</View>
			<View style={styles.completedWorkouts}>
				<View style={{ flexDirection: "row" }}>
					<Image
						source={biceps}
						style={{ width: 40, height: 40, marginTop: 20, marginLeft: 10 }}
					/>
					<View>
						<Text style={{ marginTop: 30, fontSize: 25, marginLeft: 5 }}>
							Finished
						</Text>
					</View>
				</View>
				<View>
					<Text style={{ marginTop: 30, fontSize: 45, alignSelf: "center" }}>
						12
					</Text>
				</View>
				<View>
					<Text style={{ marginTop: 20, fontSize: 15, alignSelf: "center" }}>
						Completed Workouts
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
	completedWorkouts: {
		width: 166,
		height: 210,
		borderRadius: 10,
		marginLeft: 20,
		marginTop: 20,
		backgroundColor: "white",
	},
});
