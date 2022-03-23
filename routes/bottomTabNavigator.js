import * as React from "react";
import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Libary from "../Screens/Libary";
import MuscleGroups from "../Screens/MuscleGroups";
import Landing from "../Screens/Landing";
import Sessions from "../Screens/Sessions";
import Profile from "../Screens/Profile";
import profile from "../assets/mema.png";
import homeIcon from "../assets/homeIcon.png";
import libaryIcon from "../assets/libaryIcon.png";
import focusIcon from "../assets/focusIcon.png";
import profileIcon from "../assets/profileIcon.png";
import filter from "../assets/filter-icon.png";
import { TouchableOpacity } from "react-native-web";

const Tab = createBottomTabNavigator();
function LogoTitle() {
	return (
		<View style={{ flexDirection: "row" }}>
			<Image
				style={{
					width: 60,
					height: 60,
					borderRadius: 100,
					borderColor: "white",
					borderWidth: 2,
				}}
				source={profile}
			/>
			<View style={{ marginVertical: 20, marginLeft: 20 }}>
				<Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>
					Sessions
				</Text>
			</View>
		</View>
	);
}

function HomeTabs() {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: {
					height: 50,
					backgroundColor: "#121212",
					borderTopColor: "#121212",
					alignItems: "center",
				},
			}}
		>
			<Tab.Screen
				name="Sessions"
				component={Sessions}
				options={{
					tabBarShowLabel: false,
					headerShown: false,
					headerTintColor: "#fff",
					tabBarStyle: {
						backgroundColor: "#121212",
						paddingTop: 5,
						height: 80,
						borderTopColor: "#121212",
					},
					headerStyle: {
						backgroundColor: "#7c0000",
						height: 80,
					},
					tabBarIcon: (focused) => {
						return (
							<View
								style={{
									height: 50,
									width: 50,
								}}
							>
								<Image source={homeIcon} style={{ height: 30, width: 30 }} />
							</View>
						);
					},
				}}
			/>

			<Tab.Screen
				name="Muscle Groups"
				component={MuscleGroups}
				options={{
					tabBarShowLabel: false,
					headerTintColor: "#fff",
					headerStyle: {
						backgroundColor: "#7c0000",
						height: 80,
					},
					tabBarStyle: {
						backgroundColor: "#121212",
						paddingTop: 5,
						height: 80,
						borderTopColor: "#121212",
					},
					tabBarIcon: (focused) => {
						return (
							<View
								style={{
									height: 50,
									width: 50,
								}}
							>
								<Image source={focusIcon} style={{ height: 30, width: 30 }} />
							</View>
						);
					},
				}}
			/>
			<Tab.Screen
				name="Libary"
				component={Libary}
				options={{
					tabBarShowLabel: false,
					headerTintColor: "#fff",
					/*headerStyle: {
						backgroundColor: "#7c0000",
						height: 80,
					},*/
					tabBarStyle: {
						backgroundColor: "#121212",
						paddingTop: 5,
						height: 80,
						borderTopColor: "#121212",
					},
					headerShown: false,
					tabBarIcon: (focused) => {
						return (
							<View
								style={{
									height: 50,
									width: 50,
								}}
							>
								<Image source={libaryIcon} style={{ height: 30, width: 30 }} />
							</View>
						);
					},
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarShowLabel: false,
					headerTintColor: "#fff",
					headerShown: false,
					tabBarStyle: {
						backgroundColor: "#121212",
						paddingTop: 5,
						height: 80,
						borderTopColor: "#121212",
					},
					tabBarIcon: (focused) => {
						return (
							<View
								style={{
									height: 40,
									width: 40,
								}}
							>
								<Image source={profileIcon} style={{ height: 30, width: 30 }} />
							</View>
						);
					},
				}}
			/>
		</Tab.Navigator>
	);
}

export default HomeTabs;
