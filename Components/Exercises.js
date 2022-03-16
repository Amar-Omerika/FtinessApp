import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	TextInput,
	FlatList,
	SafeAreaView,
} from "react-native";
import { Linking } from "react-native";

export default function Exercises() {
	const [filteredData, setFilteredData] = useState([]);
	const [masterData, setMasterData] = useState([]);
	const [search, setSearch] = useState("");

	const getData = async () => {
		const res = await fetch(
			"https://run.mocky.io/v3/8044eee4-8cb4-4a9e-9b55-fbf15b112b8e"
		);
		const answer = await res.json();
		setFilteredData(answer);
		setMasterData(answer);
	};
	useEffect(() => {
		getData();
	}, []);

	const renderItem = ({ item }) => {
		return (
			<View>
				<TouchableOpacity onPress={() => Linking.openURL(item.link)}>
					<View style={{ flexDirection: "row", marginTop: 10, marginRight: 5 }}>
						<View>
							<Image
								source={{
									uri: item.image,
								}}
								style={styles.img}
							/>
						</View>
						<View style={styles.description}>
							<Text style={styles.descriptionText}>
								{item.title.toUpperCase()}
							</Text>
							<Text style={styles.category}>{item.category}</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>
		);
	};
	const searchFilter = (text) => {
		if (text) {
			const newData = masterData.filter((item) => {
				const itemData = item.title
					? item.title.toUpperCase()
					: "".toUpperCase();

				const textData = text.toString().toUpperCase();
				return itemData.indexOf(textData) > -1;
			});
			setFilteredData(newData);
			setSearch(text);
		} else {
			setFilteredData(masterData);
			setSearch(text);
		}
	};
	return (
		<SafeAreaView
			style={{ flex: 1, paddingBottom: 10, backgroundColor: "#121212" }}
		>
			<View
				style={{
					backgroundColor: "#fff",
					padding: 10,
					marginVertical: 10,
					marginRight: 10,
					marginLeft: 10,
					borderRadius: 20,
				}}
			>
				<TextInput
					autoCapitalize="none"
					autoCorrect={false}
					clearButtonMode="always"
					placeholder="Search"
					onChangeText={(e) => searchFilter(e)}
					value={search}
					style={{ backgroundColor: "#fff", paddingHorizontal: 20 }}
				/>
			</View>
			<FlatList
				data={filteredData}
				renderItem={renderItem}
				keyExtractor={(item, index) => index.toString()}
			/>
		</SafeAreaView>
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
		marginLeft: 5,
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
		textTransform: "uppercase",
	},
	category: {
		color: "grey",
		alignSelf: "flex-end",
		marginRight: 10,
		marginBottom: 10,
		fontSize: 16,
		fontWeight: "bold",
	},
});
