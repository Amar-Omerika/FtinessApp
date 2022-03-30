import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Linking } from "react-native";
import food from "../assets/food.jpg";
export default function Meal({ meal }) {
	const [imageuRL, setImageURL] = useState("");
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(
			`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=5d18562865c34d779598cfa09921d69f&includeNutrition=false`
		)
			.then((response) => response.json())
			.then((datas) => {
				setData(datas);
			})
			.catch(() => {
				console.log("Error");
			});
	}, []);
	return (
		<View style={styles.container}>
			<View
				style={{
					flexDirection: "column",
					marginTop: 20,
					backgroundColor: "white",
					padding: 10,
					borderRadius: 10,
				}}
			>
				<Image
					source={food}
					style={{ width: 200, height: 100, borderRadius: 10 }}
				/>
				<Text
					style={{
						color: "black",
						fontSize: 15,
						fontWeight: "bold",
						marginVertical: 10,
					}}
				>
					{meal.title}
				</Text>
				<View>
					<Text>Preparation time: {meal.readyInMinutes} minutes</Text>
					<Text style={{ marginBottom: 10 }}>
						Number of Servings: {meal.servings}
					</Text>
				</View>
				<TouchableOpacity onPress={() => Linking.openURL(meal.sourceUrl)}>
					<View
						style={{
							width: 100,
							height: 40,
							backgroundColor: "#7c0000",
							borderRadius: 100,
						}}
					>
						<Text
							style={{
								color: "white",
								alignSelf: "center",
								marginVertical: 10,
								fontWeight: "bold",
							}}
						>
							Go To Recipe
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: "center",
		width: 300,
	},
});
