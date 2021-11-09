import * as React from "react";
import { Text, View } from "react-native";
import Sessions from "../Screens/Sessions";
import Login from "../Screens/Login";
import Landing from "../Screens/Landing";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function HomeTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Landing"
				component={Landing}
				options={{ tabBarLabel: "Landing!", headerShown: false }}
				screenOptions={{ headerShown: false }}
			/>
			<Tab.Screen
				name="Sessions"
				component={Sessions}
				options={{ tabBarLabel: "Home!" }}
				screenOptions={{ headerShown: false }}
			/>
		</Tab.Navigator>
	);
}
export default HomeTabs;
