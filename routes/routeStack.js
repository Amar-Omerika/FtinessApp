import React, { useEffect } from "react";
import Landing from "../Screens/Landing";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sessions from "../Screens/Sessions";
import HomeTabs from "./bottomTabNavigator";
import BurnWorkout from "../Screens/BurnWorkout";
import WeightLifting from "../Screens/WeightLifting";
import CardioWorkout from "../Screens/CardioWorkout";
import Home from "../Screens/Home";
import Chest from "../Screens/Chest";
import Arms from "../Screens/Arms";
import Legs from "../Screens/Legs";
import Back from "../Screens/Back";
import Shoulder from "../Screens/Shoulder";
import Abs from "../Screens/Abs";
import { login } from "../Store/user";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createNativeStackNavigator();
export default function routeStack() {
	const dispatch = useDispatch();
	const retrieveData = async () => {
		const value = await AsyncStorage.getItem("user");
		console.log(value);
		if (value) {
			dispatch(login(JSON.parse(value)));
		}
	};

	useEffect(() => {
		let mounted = true;
		if (mounted) retrieveData();
		return () => (mounted = false);
	}, []);
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="HomeTabs"
					component={HomeTabs}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Login"
					component={Login}
					options={{ headerShown: false }}
				/>

				<Stack.Screen
					name="Register"
					component={Register}
					options={{ headerShown: false }}
				/>

				<Stack.Screen
					name="Sessions"
					component={Sessions}
					options={{
						title: "Sessions",
						headerStyle: {
							backgroundColor: "#7c0000",
							height: 80,
						},
						headerTintColor: "#fff",
						headerTitleStyle: {
							fontWeight: "bold",
						},
					}}
				/>

				<Stack.Screen
					name="WeightLifting"
					component={WeightLifting}
					options={{
						title: "WeightLifting Workouts",
						headerStyle: {
							backgroundColor: "#7c0000",
						},
						headerTintColor: "#fff",
						headerTitleStyle: {
							fontWeight: "bold",
						},
					}}
				/>
				<Stack.Screen
					name="CardioWorkout"
					component={CardioWorkout}
					options={{
						title: "Cardio Workouts",
						headerStyle: {
							backgroundColor: "#7c0000",
						},
						headerTintColor: "#fff",
						headerTitleStyle: {
							fontWeight: "bold",
						},
					}}
				/>
				<Stack.Screen
					name="BurnWorkout"
					component={BurnWorkout}
					options={{
						title: "Burn Workouts",
						headerStyle: {
							backgroundColor: "#7c0000",
						},
						headerTintColor: "#fff",
						headerTitleStyle: {
							fontWeight: "bold",
						},
					}}
				/>

				<Stack.Screen
					name="Arms"
					component={Arms}
					options={{
						title: "Arms",
						headerStyle: {
							backgroundColor: "#7c0000",
						},
						headerTintColor: "#fff",
						headerTitleStyle: {
							fontWeight: "bold",
						},
					}}
				/>
				<Stack.Screen
					name="Chest"
					component={Chest}
					options={{
						title: "Chest",
						headerStyle: {
							backgroundColor: "#7c0000",
						},
						headerTintColor: "#fff",
						headerTitleStyle: {
							fontWeight: "bold",
						},
					}}
				/>
				<Stack.Screen
					name="Abs"
					component={Abs}
					options={{
						title: "Abs",
						headerStyle: {
							backgroundColor: "#7c0000",
						},
						headerTintColor: "#fff",
						headerTitleStyle: {
							fontWeight: "bold",
						},
					}}
				/>
				<Stack.Screen
					name="Legs"
					component={Legs}
					options={{
						title: "Legs",
						headerStyle: {
							backgroundColor: "#7c0000",
						},
						headerTintColor: "#fff",
						headerTitleStyle: {
							fontWeight: "bold",
						},
					}}
				/>
				<Stack.Screen
					name="Back"
					component={Back}
					options={{
						title: "Back",
						headerStyle: {
							backgroundColor: "#7c0000",
						},
						headerTintColor: "#fff",
						headerTitleStyle: {
							fontWeight: "bold",
						},
					}}
				/>
				<Stack.Screen
					name="Shoulder"
					component={Shoulder}
					options={{
						title: "Shoulder",
						headerStyle: {
							backgroundColor: "#7c0000",
						},
						headerTintColor: "#fff",
						headerTitleStyle: {
							fontWeight: "bold",
						},
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
