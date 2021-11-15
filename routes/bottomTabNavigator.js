import * as React from "react";
import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Landing from "../Screens/Landing";
import Libary from "../Screens/Libary";
import FocusGroups from "../Screens/FocusGroup";
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
				name="Landing"
				component={Landing}
				options={{
					headerShown: false,
					tabBarShowLabel: false,
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
				name="FocusGroups"
				component={FocusGroups}
				options={{
					tabBarShowLabel: false,
					headerTitle: (props) => <LogoTitle {...props} />,
					headerStyle: {
						backgroundColor: "#4267B2",
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
					headerTitle: (props) => <LogoTitle {...props} />,
					headerStyle: {
						backgroundColor: "#4267B2",
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
				name="Home"
				component={Profile}
				options={{
					tabBarShowLabel: false,
					headerTitle: (props) => <LogoTitle {...props} />,
					headerStyle: {
						backgroundColor: "#4267B2",
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
export default HomeTabs;
