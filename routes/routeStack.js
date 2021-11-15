import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Landing from "../Screens/Landing";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sessions from "../Screens/Sessions";
import HomeTabs from "./bottomTabNavigator";
import BurnWorkout from "../Screens/BurnWorkout";
const Stack = createNativeStackNavigator();
export default function routeStack() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={Landing}>
				<Stack.Screen
					name="HomeTabs"
					component={HomeTabs}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Landing"
					component={Landing}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="Sessions" component={Sessions} />

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
					name="BurnWorkout"
					component={BurnWorkout}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
