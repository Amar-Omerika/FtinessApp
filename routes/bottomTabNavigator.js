import * as React from "react";
import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Libary from "../Screens/Libary";
import FocusGroups from "../Screens/FocusGroup";
import Sessions from "../Screens/Sessions";
import Profile from "../Screens/Profile";
import profile from "../assets/mema.png";
import homeIcon from "../assets/homeIcon.png";
import libaryIcon from "../assets/libaryIcon.png";
import focusIcon from "../assets/focusIcon.png";
import profileIcon from "../assets/profileIcon2.png";

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
				tabBarStyle: { height: 60 },
			}}
		>
			<Tab.Screen
				name="Sessions"
				component={Sessions}
				options={{
					tabBarShowLabel: false,
					headerShown: false,

					headerTitle: (props) => <LogoTitle {...props} />,
					tabBarIcon: (focused) => {
						return (
							<View
								style={{
									height: 50,
									width: 50,
									marginTop: 10,
								}}
							>
								<Image source={homeIcon} style={{ height: 35, width: 35 }} />
							</View>
						);
					},
				}}
			/>
			<Tab.Screen
				name="Focus Groups"
				component={FocusGroups}
				options={{
					tabBarShowLabel: false,
					headerTintColor: "#fff",
					headerStyle: {
						backgroundColor: "#4880F2",
						height: 100,
					},
					tabBarIcon: (focused) => {
						return (
							<View
								style={{
									height: 50,
									width: 50,
									marginTop: 10,
								}}
							>
								<Image source={focusIcon} style={{ height: 35, width: 35 }} />
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

					headerStyle: {
						backgroundColor: "#4880F2",
						height: 100,
					},
					tabBarIcon: (focused) => {
						return (
							<View
								style={{
									height: 50,
									width: 50,
									marginTop: 10,
								}}
							>
								<Image source={libaryIcon} style={{ height: 35, width: 35 }} />
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
					headerStyle: {
						backgroundColor: "#4880F2",
						height: 100,
					},
					tabBarIcon: (focused) => {
						return (
							<View
								style={{
									height: 50,
									width: 50,
									marginTop: 10,
								}}
							>
								<Image source={profileIcon} style={{ height: 35, width: 35 }} />
							</View>
						);
					},
				}}
			/>
		</Tab.Navigator>
	);
}
const TempScreen = () => {
	return (
		<View>
			<Text></Text>
		</View>
	);
};
export default HomeTabs;
