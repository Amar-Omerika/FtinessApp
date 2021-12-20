import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import Landing from "./Landing";
import Sessions from "./Sessions";
import user from "../Store/user";

export default function Home() {
	const user = useSelector((state) => state.user);

	return (
		<View style={styles.container}>{user ? <Landing /> : <Sessions />}</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
	},
});
