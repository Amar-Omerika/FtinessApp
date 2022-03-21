import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	Button,
	Image,
	TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import UploadImage from "../assets/uploadImage.png";
import defaultPicture from "../assets/defaultPicture.jpg";

export default function EditProfile() {
	const [image, setImage] = useState(null);
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
});
