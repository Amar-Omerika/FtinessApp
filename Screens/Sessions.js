import React, { useState } from "react";

import WorkoutCard from "../Components/WorkoutCard";
import Header from "../Components/Header";
import { View } from "react-native";

export default function Sessions() {
	return (
		<View style={{ backgroundColor: "#121212" }}>
			<Header />
			<WorkoutCard />
		</View>
	);
}
