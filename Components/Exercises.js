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
import { Linking } from "react-native";

export default function Exercises() {
	const [data, setData] = useState([]);

	const getData = async () => {
		const res = await fetch(
			"https://run.mocky.io/v3/f685415c-b032-4829-848a-dcb2dd15ca91"
		);
		const answer = await res.json();
		setData(answer);
	};
	useEffect(() => {
		getData();
	}, []);

	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity onPress={() => Linking.openURL(item.link)}>
				<View style={{ flexDirection: "row", marginTop: 10 }}>
					<View>
						<Image
							source={{
								uri: item.image,
							}}
							style={styles.img}
						/>
					</View>
					<View style={styles.description}>
						<Text style={styles.descriptionText}>{item.title}</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	};
	const renderHeader = () => {
		return (
			<View
				style={{
					backgroundColor: "#fff",
					padding: 10,
					marginVertical: 10,
					borderRadius: 20,
				}}
			>
				<TextInput
					autoCapitalize="none"
					autoCorrect={false}
					clearButtonMode="always"
					placeholder="Search"
					style={{ backgroundColor: "#fff", paddingHorizontal: 20 }}
				/>
			</View>
		);
	};
	return (
		<FlatList
			data={data}
			ListHeaderComponent={renderHeader}
			renderItem={renderItem}
			keyExtractor={(item) => item._id}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginLeft: 5,
		marginBottom: 20,
	},
	img: {
		width: 133,
		height: 83,
		borderRadius: 10,
	},
	description: {
		backgroundColor: "#E7E1E1",
		height: 85,
		flex: 1,
		borderRadius: 10,
		marginLeft: 4,
		marginRight: 5,
	},
	descriptionText: {
		flex: 1,
		marginLeft: 4,
		marginRight: 4,
		marginTop: 3,
		fontWeight: "bold",
	},
});
