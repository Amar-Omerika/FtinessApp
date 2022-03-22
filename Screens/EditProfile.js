import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	TextInput,
	Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import UploadImage from "../assets/uploadImage.png";
import defaultPicture from "../assets/defaultPicture.jpg";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import { saveChanges } from "../Store/edit";

export default function EditProfile() {
	const [image, setImage] = useState(null);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const handleEdit = () => {
		dispatch(
			saveChanges({
				username,
				email,
				image,
			})
		);
	};

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		console.log(result);

		if (!result.cancelled) {
			setImage(result.uri);
		}
	};
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#121212",
			}}
		>
			<View>
				<Image style={styles.circle} source={defaultPicture} />
				<View stlye={styles.imageContainer}>
					{image && (
						<Image
							source={{ uri: image }}
							style={{
								alignSelf: "center",
								marginTop: -150,
								width: 150,
								height: 150,
								borderRadius: 100,
							}}
						/>
					)}
				</View>
				<TouchableOpacity onPress={pickImage}>
					<View style={styles.upload}>
						<Image source={UploadImage} />
					</View>
				</TouchableOpacity>
			</View>
			<View
				style={{
					flexDirection: "row",
					backgroundColor: "#C0C0C0",
					marginTop: 30,
					borderRadius: 8,
					marginLeft: 10,
					marginRight: 10,
				}}
			>
				<TextInput
					style={styles.input}
					value={username}
					onChangeText={setUsername}
					placeholder="Username..."
				></TextInput>
			</View>
			<View
				style={{
					flexDirection: "row",
					backgroundColor: "#C0C0C0",
					marginTop: 30,
					borderRadius: 8,
					marginLeft: 10,
					marginRight: 10,
				}}
			>
				<TextInput
					style={styles.input}
					value={email}
					onChangeText={setEmail}
					placeholder="Email..."
				></TextInput>
			</View>
			<TouchableOpacity onPress={() => handleEdit()}>
				<View style={styles.button}>
					<Text
						style={{
							alignSelf: "center",
							color: "white",
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Save Changes
					</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity>
				<View style={styles.button}>
					<Text
						style={{
							alignSelf: "center",
							color: "white",
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Cancel
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
	},
	circle: {
		width: 150,
		height: 150,
		borderRadius: 100,
		alignSelf: "center",
		marginTop: 20,
	},
	upload: {
		alignSelf: "center",
		marginTop: -30,
		marginLeft: 50,
	},
	input: {
		padding: 14,
		borderColor: "#B9C4CA",
		borderWidth: 1,
		borderRadius: 4,
		fontSize: 16,
	},
	button: {
		backgroundColor: "#7c0000",
		marginTop: 30,
		borderRadius: 8,
		marginLeft: 10,
		marginRight: 10,
		padding: 15,
	},
});
