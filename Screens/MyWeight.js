import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	TextInput,
	Text,
	Button,
	Image,
	ScrollView,
} from "react-native";
import MealList from "../Components/MealList";
import AddWeight from "../Modals/AddWeightModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function MyWeight() {
	const [mealData, setMealData] = useState(null);
	const [calories, setCalories] = useState(2000);
	const [data, setData] = useState([]);
	const [refresh, setRefresh] = useState();

	const getDataFromUser = async () => {
		const value = await AsyncStorage.getItem("addWeight");
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
	// useEffect(() => {
	// 	getMealData();
	// }, []);

	// const getMealData = async () => {
	// 	const response = await fetch(
	// 		`https://api.spoonacular.com/mealplanner/generate?apiKey=5d18562865c34d779598cfa09921d69f&timeFrame=day&targetCalories=${calories}`
	// 	);
	// 	const data = await response.json();
	// 	setMealData(data);
	// 	console.log(mealData);
	// };
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#121212",
			}}
		>
			<ScrollView>
				<View style={styles.current}>
					<Text
						style={{
							color: "white",
							fontSize: 20,
							fontWeight: "bold",
							marginLeft: 10,
						}}
					>
						Current Weight
					</Text>
					<Text
						style={{
							color: "white",
							fontSize: 20,
							fontWeight: "bold",
							marginLeft: 10,
						}}
					>
						{data.weight}
					</Text>
				</View>
				<View style={{ flex: 1, alignSelf: "flex-end", marginRight: 2 }}>
					<AddWeight />
				</View>
				<View
					style={{
						flexDirection: "row",
					}}
				>
					<View
						style={{
							flexDirection: "row",
							backgroundColor: "white",
							marginTop: 30,
							borderRadius: 8,
							marginLeft: 20,
							marginRight: 10,
							width: 200,
							padding: 10,
						}}
					>
						<TextInput
							style={styles.input}
							value={calories.toString()}
							onChangeText={setCalories}
							placeholder="calories..."
						></TextInput>
					</View>
					<TouchableOpacity onPress={() => getMealData()}>
						<View style={styles.submit}>
							<Text
								style={{
									color: "white",
									alignSelf: "center",
									marginVertical: 12,
									fontSize: 20,
									fontWeight: "bold",
								}}
							>
								Submit
							</Text>
						</View>
					</TouchableOpacity>
				</View>
				{mealData && <MealList mealData={mealData} />}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
	},
	current: {
		marginLeft: 10,
		marginTop: 20,
	},
	updateWeight: {
		width: 150,
		height: 50,
		backgroundColor: "#7c0000",
		marginTop: 20,
		alignSelf: "flex-end",
		marginRight: 10,
		borderRadius: 100,
	},
	submit: {
		width: 150,
		height: 50,
		backgroundColor: "#7c0000",
		marginTop: 30,
		alignSelf: "flex-end",
		marginRight: 10,
		borderRadius: 100,
	},
});
