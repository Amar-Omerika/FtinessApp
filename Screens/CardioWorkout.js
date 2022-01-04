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
export default function CardioWorkout() {
	const [data, setData] = useState([]);
	const getData = async () => {
		const res = await fetch(
			"https://run.mocky.io/v3/334fdb68-b801-4f85-a13c-bbedae37c940"
		);
		const answer = await res.json();
		setData(answer);
	};

	useEffect(() => {
		getData();
	}, []);
	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => Linking.openURL(item.link)}>
						<View
							style={{
								flexDirection: "row",
								marginTop: 10,
							}}
						>
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
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingBottom: 20,
		backgroundColor: "#121212",
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
