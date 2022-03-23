import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import mema from "../assets/mema.png";
import editp from "../assets/edit.png";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { saveChanges } from "../Store/edit";
export default function HeaderProfile() {
	const [data, setData] = useState([]);
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const getDataFromUser = async () => {
		const value = await AsyncStorage.getItem("edit");
		let parsed = JSON.parse(value);
		if (value) {
			setData(parsed);
		}
		console.log(parsed);
	};

	useEffect(() => {
		let mounted = true;
		if (mounted) getDataFromUser();
		return () => (mounted = false);
	}, []);

	return (
		<View style={styles.container}>
			<View style={{ flexDirection: "row" }}>
				<View>
					<Image
						source={{ uri: data.image }}
						style={{
							width: 80,
							height: 80,
							marginTop: 40,
							marginLeft: 20,
							borderRadius: 100,
							borderWidth: 2,
							borderColor: "white",
						}}
					/>
				</View>
				<View style={{ marginTop: 50, marginLeft: 30 }}>
					<Text style={{ color: "white", fontSize: 30 }}>Hi</Text>
					<Text style={{ color: "white", fontSize: 20 }}>{data.username}</Text>
				</View>
				<View>
					<TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
						<Image
							source={editp}
							style={{
								width: 40,
								height: 40,
								marginTop: 40,
								marginLeft: 80,
								marginRight: 20,
							}}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
