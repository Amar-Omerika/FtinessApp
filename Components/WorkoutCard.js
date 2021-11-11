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
import BurnWotkoutImage from "../assets/BurnWorkoutImg.png";
import star from "../assets/star.png";
import mema from "../assets/mema.png";

export default function WorkoutCard({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={{ marginTop: 20 }}>
				<Image source={BurnWotkoutImage} style={styles.image} />
				<View style={styles.informationContainer}>
					<View style={{ flexDirection: "row", padding: 10 }}>
						<Text
							style={{
								fontWeight: "bold",
								fontSize: 15,
							}}
						>
							Burn Workouts
						</Text>
						<View
							style={{
								backgroundColor: "#4267B2",
								width: 80,
								borderRadius: 10,
								flexDirection: "row",
								marginLeft: 100,
							}}
						>
							<Text style={styles.rating}>4.9</Text>
							<Image source={star} style={{ marginLeft: 20 }} />
						</View>
					</View>
					<View style={styles.profileView}>
						<Image source={mema} style={styles.profilePictuers} />
						<Image source={mema} style={styles.profilePictuers2} />
						<Text style={{ marginTop: 20, fontStyle: "italic", marginLeft: 2 }}>
							25 others liked this workout
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		height: 200,
		width: 340,
		alignSelf: "center",
		borderRadius: 10,
		zIndex: -1,
	},
	informationContainer: {
		backgroundColor: "#F4EFEF",
		width: 344,
		height: 100,
		marginTop: -40,
		borderRadius: 10,
		width: 300,
		alignSelf: "center",
	},
	rating: {
		color: "white",
		fontSize: 17,
		fontWeight: "bold",
		marginLeft: 5,
	},
	profileView: {
		flexDirection: "row",
	},
	profilePictuers: {
		height: 50,
		width: 50,
	},
	profilePictuers2: {
		marginLeft: -10,
		height: 50,
		width: 50,
	},
});
