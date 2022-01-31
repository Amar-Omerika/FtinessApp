import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	TextInput,
	KeyboardAvoidingView,
	KeyboardAwareScrollView,
	ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../Store/user";
import { useNavigation } from "@react-navigation/core";
import mema from "../assets/mema.png";
import edit from "../assets/edit.png";
import biceps from "../assets/biceps.png";

export default function Profile() {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logout());
		navigation.navigate("Home");
	};
	return (
		<View style={styles.container}>
			<ScrollView style={{ flex: 1 }}>
				<View style={{ flexDirection: "row" }}>
					<View>
						<Image
							source={mema}
							style={{ width: 80, height: 80, marginTop: 40, marginLeft: 20 }}
						/>
					</View>
					<View style={{ marginTop: 50, marginLeft: 30 }}>
						<Text style={{ color: "white", fontSize: 30 }}>Hi,</Text>
						<Text style={{ color: "white", fontSize: 20 }}>Anel Memić</Text>
					</View>
					<View>
						<TouchableOpacity>
							<Image
								source={edit}
								style={{
									width: 40,
									height: 40,
									marginTop: 40,
									marginLeft: 80,
									marginRight: 20,
								}}
							/>
						</TouchableOpacity>
					</View>
				</View>
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

				<View style={{ alignSelf: "center", marginTop: 200 }}>
					<TouchableOpacity onPress={() => handleLogout()}>
						<Text style={{ color: "white" }}>Logout</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							backgroundColor: "#4267B2",
							marginTop: 30,
							alignItems: "center",
							height: 50,
							width: 229,
							borderRadius: 50,
							alignSelf: "center",
						}}
						onPress={() => navigation.navigate("Login")}
					>
						<Text
							style={{
								color: "white",
								fontWeight: "bold",
								padding: 15,
								fontSize: 16,
							}}
						>
							Login
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#121212",
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
