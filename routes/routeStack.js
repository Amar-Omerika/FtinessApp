import React, { useEffect } from "react";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTabs from "./bottomTabNavigator";
import BurnWorkout from "../Screens/BurnWorkout";
import WeightLifting from "../Screens/WeightLifting";
import CardioWorkout from "../Screens/CardioWorkout";
import EditProfile from "../Screens/EditProfile";
import Home from "../Screens/Home";
import Chest from "../Screens/Chest";
import Arms from "../Screens/Arms";
import Legs from "../Screens/Legs";
import Back from "../Screens/Back";
import Shoulder from "../Screens/Shoulder";
import Abs from "../Screens/Abs";
import Beginner from "../Screens/Beginner";
import Intermediate from "../Screens/Intermediate";
import Advanced from "../Screens/Advanced";
import { login } from "../Store/user";
import { useDispatch } from "react-redux";
import { Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import beginnerIcon from "../assets/beginnerIcon.png";
import intermediate from "../assets/intermediate.png";
import advanced from "../assets/advanced.png";
import NewGoals from "../Screens/NewGoals";
import MyWorkouts from "../Screens/MyWorkouts";
import MyWeight from "../Screens/MyWeight";
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

	const icon = () => {
		return <Image source={beginnerIcon} />;
	};
	const icon1 = () => {
		return <Image source={intermediate} />;
	};
	const icon2 = () => {
		return <Image source={advanced} />;
	};
	return (
		<NavigationContainer>
			<Stack.Navigator>
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
					name="EditProfile"
					component={EditProfile}
					options={{
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
					name="NewGoals"
					component={NewGoals}
					options={{
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
					name="MyWorkouts"
					component={MyWorkouts}
					options={{
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
					name="MyWeight"
					component={MyWeight}
					options={{
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
				<Stack.Screen
					name="Beginner"
					component={Beginner}
					options={{
						headerRight: () => icon(),
						title: "Beginner",
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
					name="Intermediate"
					component={Intermediate}
					options={{
						headerRight: () => icon1(),
						title: "Intermediate",
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
					name="Advanced"
					component={Advanced}
					options={{
						headerRight: () => icon2(),
						title: "Advanced",
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
