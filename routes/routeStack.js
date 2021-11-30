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
import { login } from "../Store/user";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createNativeStackNavigator();
export default function routeStack() {
	const dispatch = useDispatch();
	const retrieveData = async () => {
		const value = await AsyncStorage.getItem("user");
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
			<Stack.Navigator initialRouteName={Home}>
				<Stack.Screen
					name="HomeTabs"
					component={HomeTabs}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Landing"
					component={Landing}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Sessions"
					component={Sessions}
					options={{
						title: "Sessions",
						headerStyle: {
							backgroundColor: "#4267B2",
						},
						headerTintColor: "#fff",
						headerTitleStyle: {
							fontWeight: "bold",
						},
					}}
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
					name="WeightLifting"
					component={WeightLifting}
					options={{
						title: "WeightLifting Workouts",
						headerStyle: {
							backgroundColor: "#4267B2",
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
							backgroundColor: "#4267B2",
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
							backgroundColor: "#4267B2",
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
