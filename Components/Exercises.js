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
	Modal,
} from "react-native";
import { Linking } from "react-native";
import LibaryHeader from "./LibaryHeader";
import icon from "../assets/iconModal.png";
import filter from "../assets/filter-icon.png";

export default function Exercises() {
	const [filteredData, setFilteredData] = useState([]);
	const [masterData, setMasterData] = useState([]);
	const [search, setSearch] = useState("");
	const [modalVisible, setModalVisible] = useState(false);

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
	const filterCategory = (categoryName) => {
		const result = filteredData.filter((currentData) => {
			return currentData.category === categoryName;
		});
		setFilteredData(result);
		//console.log(result);
		setModalVisible(!modalVisible);
	};
	return (
		<SafeAreaView
			style={{ flex: 1, paddingBottom: 10, backgroundColor: "#121212" }}
		>
			<View
				style={{
					flexDirection: "row",
					backgroundColor: "#7c0000",
					height: 80,
				}}
			>
				<View style={{ marginLeft: 20, marginTop: 30 }}>
					<Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
						Libary
					</Text>
				</View>
				<View style={{ marginLeft: 70 }}>
					{/* Begin of modal */}
					<View style={styles.centeredView}>
						<Modal
							animationType="fade"
							transparent={true}
							visible={modalVisible}
							onRequestClose={() => {
								setModalVisible(!modalVisible);
							}}
						>
							<View style={styles.centeredView}>
								<View style={styles.modalView}>
									<Text
										style={{
											marginBottom: 10,
											fontSize: 20,
											fontWeight: "bold",
										}}
									>
										Training levels
									</Text>
									<View style={{ flexDirection: "row" }}>
										<Image source={icon} style={{ width: 40, height: 40 }} />
										<TouchableOpacity
											onPress={() => {
												setFilteredData(masterData);
												setModalVisible(!modalVisible);
											}}
										>
											<Text style={styles.modalText}>All</Text>
										</TouchableOpacity>
									</View>
									<View style={{ flexDirection: "row" }}>
										<Image source={icon} style={{ width: 40, height: 40 }} />
										<TouchableOpacity onPress={() => filterCategory("Legs")}>
											<Text style={styles.modalText}>Legs</Text>
										</TouchableOpacity>
									</View>
									<View style={{ flexDirection: "row" }}>
										<Image source={icon} style={{ width: 40, height: 40 }} />
										<TouchableOpacity onPress={() => filterCategory("Chest")}>
											<Text style={styles.modalText}>Chest</Text>
										</TouchableOpacity>
									</View>
									<View style={{ flexDirection: "row" }}>
										<Image source={icon} style={{ width: 40, height: 40 }} />
										<TouchableOpacity onPress={() => handleAdvanced()}>
											<Text style={styles.modalText}>Back</Text>
										</TouchableOpacity>
									</View>
									<TouchableOpacity
										style={[styles.button, styles.buttonClose]}
										onPress={() => setModalVisible(!modalVisible)}
									>
										<Text style={styles.textStyle}>Close</Text>
									</TouchableOpacity>
								</View>
							</View>
						</Modal>

						<TouchableOpacity
							style={[styles.buttonOpen]}
							onPress={() => setModalVisible(true)}
						>
							<Image
								source={filter}
								style={{
									height: 30,
									width: 30,
									marginLeft: 190,
									marginRight: 20,
									marginVertical: 10,
								}}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>

			{/*---------- end of modal ------------*/}
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
	//starting style for modal
	centeredView: {
		flex: 1,
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		paddingBottom: 5,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		width: 300,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},

	buttonClose: {
		backgroundColor: "#7C0000",
		width: 100,
		marginLeft: 150,
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginVertical: 10,
		marginLeft: 10,
		textAlign: "center",
	},
});
