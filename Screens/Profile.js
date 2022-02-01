import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../Store/user";
import { useNavigation } from "@react-navigation/core";
import HeaderProfile from "../Components/HeaderProfile";
import CompletedWorkouts from "../Components/CompletedCard";
import InProgressCard from "../Components/InProgressCard,";
import TimeSpentCard from "../Components/TimeSpentCard";
import MyGoals from "../Components/MyGoals";
import WeightProgress from "../Components/WeightProgress";

export default function Profile() {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logout());
		navigation.navigate("Home");
	};
	return (
		<View style={styles.container}>
			<ScrollView style={{ flex: 1 }}>
				<HeaderProfile />
				<View style={{ flexDirection: "row" }}>
					<CompletedWorkouts />
					<View>
						<InProgressCard />
						<TimeSpentCard />
					</View>
				</View>
				<View style={{ flexDirection: "row", marginTop: 20 }}>
					<MyGoals />
					<WeightProgress />
				</View>
				<View style={styles.btnWorkouts}>
					<View style={{ flexDirection: "row" }}>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "500",
								marginVertical: 10,
								marginLeft: 20,
							}}
						>
							My Workouts
						</Text>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "500",
								marginVertical: 10,
								marginLeft: 170,
								marginRight: 20,
							}}
						>
							{">"}
						</Text>
					</View>
				</View>
				<View style={{ alignSelf: "center", marginTop: 40 }}>
					<TouchableOpacity onPress={() => handleLogout()}>
						<Text style={{ color: "white" }}>Logout</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#121212",
	},
	btnWorkouts: {
		backgroundColor: "white",
		flex: 1,
		height: 50,
		borderRadius: 10,
		marginRight: 20,
		marginLeft: 20,
		marginTop: 40,
	},
});
