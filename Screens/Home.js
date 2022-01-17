import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import Landing from "./Landing";
import Sessions from "./Sessions";
import Libary from "./Libary";
import { Text } from "react-native";

export default function Home() {
	const { user } = useSelector((state) => state.user);

	return <View>{user ? <Sessions /> : <Landing />}</View>;
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
	},
});
