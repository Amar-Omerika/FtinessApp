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
import { useSelector } from "react-redux";
import Landing from "./Landing";
import Sessions from "./Sessions";
export default function Home() {
	const user = useSelector((state) => state.user);
	return <View>{user ? <Landing /> : <Sessions />}</View>;
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
		marginTop: 50,
	},
});
