import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import MyGoalsModal from "../Modals/MyGoalsModal";
import flag from "../assets/flag.png";
export default function MyGoals() {
	return (
		<View style={styles.container}>
			{/* <TouchableOpacity>
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
			</TouchableOpacity> */}
			<MyGoalsModal />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: -10,
	},
});
