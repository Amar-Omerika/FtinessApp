import React, { useState } from "react";
import { StyleSheet } from "react-native";
import BurnWorkouts from "../Components/BurnWorkouts";
export default function BurnWorkout() {
	return <BurnWorkouts />;
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
		marginTop: 50,
	},
});
