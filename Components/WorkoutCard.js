import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	ScrollView,
	ImageBackground,
} from "react-native";
import BurnWotkoutImage from "../assets/BurnWorkoutImg.png";
import star from "../assets/star.png";
import mema from "../assets/mema.png";
import weightLifting from "../assets/weightLifting.png";
import cardio from "../assets/cardioImage.jpg";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { logoutsucc, logout } from "../Store/user";
import pozadina from "../assets/pozadina.jpg";
export default function WorkoutCard() {
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logout());
	};
	const navigation = useNavigation();
	return (
		<ScrollView style={{ marginBottom: 90 }}>
			<View style={styles.container}>
				<View style={{ marginTop: 20 }}>
					<TouchableOpacity onPress={() => navigation.navigate("BurnWorkout")}>
						<Image source={BurnWotkoutImage} style={styles.image} />
					</TouchableOpacity>
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
									backgroundColor: "#3e0000",
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
							<Text
								style={{ marginTop: 20, fontStyle: "italic", marginLeft: 2 }}
							>
								25 others liked this workout
							</Text>
						</View>
					</View>
				</View>
				<View style={{ marginTop: 20 }}>
					<TouchableOpacity
						onPress={() => navigation.navigate("WeightLifting")}
					>
						<Image source={weightLifting} style={styles.image} />
					</TouchableOpacity>
					<View style={styles.informationContainer}>
						<View style={{ flexDirection: "row", padding: 10 }}>
							<Text
								style={{
									fontWeight: "bold",
									fontSize: 15,
								}}
							>
								Weight Lifting
							</Text>
							<View
								style={{
									backgroundColor: "#3e0000",
									width: 80,
									borderRadius: 10,
									flexDirection: "row",
									marginLeft: 100,
								}}
							>
								<Text style={styles.rating}>5.0</Text>
								<Image source={star} style={{ marginLeft: 20 }} />
							</View>
						</View>
						<View style={styles.profileView}>
							<Image source={mema} style={styles.profilePictuers} />
							<Image source={mema} style={styles.profilePictuers2} />
							<Text
								style={{ marginTop: 20, fontStyle: "italic", marginLeft: 2 }}
							>
								33 others liked this workout
							</Text>
						</View>
					</View>
				</View>
				<View style={{ marginTop: 20 }}>
					<TouchableOpacity
						onPress={() => navigation.navigate("CardioWorkout")}
					>
						<Image source={cardio} style={styles.image} />
					</TouchableOpacity>
					<View style={styles.informationContainer}>
						<View style={{ flexDirection: "row", padding: 10 }}>
							<Text
								style={{
									fontWeight: "bold",
									fontSize: 15,
								}}
							>
								Cardio Workouts
							</Text>
							<View
								style={{
									backgroundColor: "#3e0000",
									width: 80,
									borderRadius: 10,
									flexDirection: "row",
									marginLeft: 80,
								}}
							>
								<Text style={styles.rating}>4.9</Text>
								<Image source={star} style={{ marginLeft: 20 }} />
							</View>
						</View>
						<View style={styles.profileView}>
							<Image source={mema} style={styles.profilePictuers} />
							<Image source={mema} style={styles.profilePictuers2} />
							<Text
								style={{ marginTop: 20, fontStyle: "italic", marginLeft: 2 }}
							>
								28 others liked this workout
							</Text>
						</View>
					</View>
				</View>
				<TouchableOpacity onPress={() => handleLogout()}>
					<Text>Logout</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
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
