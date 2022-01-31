import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../Store/user";
import { useNavigation } from "@react-navigation/core";
import HeaderProfile from "../Components/HeaderProfile";
import CompletedWorkouts from "../Components/CompletedCard";
import InProgressCard from "../Components/InProgressCard,";

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
				<HeaderProfile />
				<View style={{ flexDirection: "row" }}>
					<CompletedWorkouts />
					<InProgressCard />
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
});
