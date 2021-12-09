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

export default function Arms() {
	return (
		<View style={styles.container}>
			<Text>Arms</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
	},
});
