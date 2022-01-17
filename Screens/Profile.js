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
import { useDispatch } from "react-redux";
import { logout } from "../Store/user";
import { useNavigation } from "@react-navigation/core";
export default function Profile() {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logout());
		navigation.navigate("Home");
	};
	return (
		<View style={styles.container}>
			<View style={{ alignSelf: "center", marginTop: 500 }}>
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
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#121212",
	},
});
