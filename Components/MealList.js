import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Meal from "./Meal";
export default function MealList({ mealData }) {
	const nutrients = mealData.nutrients;
	console.log(mealData);
	return (
		<View style={styles.container}>
			<View
				style={{
					flexDirection: "row",
					backgroundColor: "white",
					alignSelf: "center",
					padding: 5,
					marginTop: 20,
					borderRadius: 10,
				}}
			>
				<Text style={{ fontWeight: "bold" }}>
					Calories :{parseInt(nutrients.calories) + " "}
				</Text>
				<Text style={{ fontWeight: "bold" }}>
					Protein :{parseInt(nutrients.protein) + " "}
				</Text>
				<Text style={{ fontWeight: "bold" }}>
					Protein :{parseInt(nutrients.carbohydrates) + ""}
				</Text>
				<Text style={{ fontWeight: "bold" }}>
					Protein :{parseInt(nutrients.fat) + " "}
				</Text>
			</View>
			{mealData.meals.map((meal) => {
				return <Meal key={meal.id} meal={meal} />;
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: "center",
	},
});
