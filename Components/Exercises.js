import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	TextInput,
	FlatList,
} from "react-native";

export default function Exercises() {
	const [data, setData] = useState([]);
	const getData = async () => {
		const res = await fetch(
			"https://run.mocky.io/v3/f685415c-b032-4829-848a-dcb2dd15ca91"
		);
		const answer = res.json();
		setData(answer);
	};
	useEffect(() => {
		getData();
	});
	return <FlatList />;
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
		marginTop: 50,
	},
});
