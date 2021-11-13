import * as React from "react";
import { Text, View, Image } from "react-native";
import Sessions from "../Screens/Sessions";
import Landing from "../Screens/Landing";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import profile from "../assets/mema.png";
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
				tabBarStyle: { marginTop: 5 },
			}}
		>
			<Tab.Screen
				name="Landing"
				component={Landing}
				options={{
					tabBarLabel: "Landing!",
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="Sessions"
				component={Sessions}
				options={{
					tabBarLabel: "Home!",
					headerTitle: (props) => <LogoTitle {...props} />,
					headerStyle: {
						backgroundColor: "#4267B2",
						height: 100,
					},
				}}
			/>
		</Tab.Navigator>
	);
}
export default HomeTabs;
