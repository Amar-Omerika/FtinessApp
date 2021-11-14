import * as React from "react";
import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Sessions from "../Screens/Sessions";
import Landing from "../Screens/Landing";
import Libary from "../Screens/Libary";
import FocusGroups from "../Screens/FocusGroup";
import profile from "../assets/mema.png";
import homeIcon from "../assets/homeIcon.png";
import libaryIcon from "../assets/libaryIcon.png";
import focusIcon from "../assets/focusIcon.png";

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
				tabBarStyle: { marginTop: 5, height: 60 },
			}}
		>
			<Tab.Screen
				name="Landing"
				component={Landing}
				options={{
					tabBarLabel: "Home!",
					headerShown: false,
					tabBarIcon: (focused) => {
						return (
							<View
								style={{
									height: 50,
									width: 50,
								}}
							>
								<Image source={homeIcon} />
							</View>
						);
					},
				}}
			/>
			<Tab.Screen
				name="FocusGroups"
				component={FocusGroups}
				options={{
					tabBarLabel: "FocusGroups!",
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
									marginTop: 5,
								}}
							>
								<Image source={focusIcon} />
							</View>
						);
					},
				}}
			/>
			<Tab.Screen
				name="Libary"
				component={Libary}
				options={{
					tabBarLabel: "Libary!",
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
								}}
							>
								<Image source={libaryIcon} />
							</View>
						);
					},
				}}
			/>
		</Tab.Navigator>
	);
}
export default HomeTabs;
