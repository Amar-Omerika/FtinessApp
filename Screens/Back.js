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

export default function Back() {
	return (
		<View style={styles.container}>
			<Text>Back</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
	},
});
