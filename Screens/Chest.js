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

export default function Chest() {
	return (
		<View style={styles.container}>
			<Text>Chest</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
	},
});
