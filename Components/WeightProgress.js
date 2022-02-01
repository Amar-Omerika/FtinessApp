import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import weight from "../assets/weight.png";
export default function WeightProgress() {
	return (
		<View style={styles.container}>
			<View style={styles.weightProgress}>
				<View style={{ flexDirection: "row" }}>
					<Image
						source={weight}
						style={{
							marginTop: 10,
							marginLeft: 10,
							marginRight: 10,
							height: 30,
							width: 30,
						}}
					/>
					<Text
						style={{
							alignSelf: "center",
							marginTop: 10,
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						My Weight Progress {">"}
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
	weightProgress: {
		width: 166,
		height: 70,
		backgroundColor: "white",
		borderRadius: 10,
		marginTop: 15,
		marginRight: 20,
		marginLeft: 10,
	},
});
