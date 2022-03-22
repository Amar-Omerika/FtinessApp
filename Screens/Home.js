import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import Landing from "./Landing";
import Sessions from "./Sessions";

export default function Home() {
	const { user } = useSelector((state) => state.user);
	return <View>{user ? <Sessions /> : <Landing />}</View>;
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
	},
});
