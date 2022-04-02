import React, { useCallback, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	ScrollView,
	Button,
	RefreshControl,
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
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile() {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logout());
		navigation.navigate("Home");
	};

	const wait = (timeout) => {
		return new Promise((resolve) => setTimeout(resolve, timeout));
	};

	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		wait(1000).then(() => setRefreshing(false));
	}, []);

	/*const clearAsyncStorage = async () => {
		AsyncStorage.clear();
	};*/
	return (
		<View style={styles.container}>
			<ScrollView
				style={{ flex: 1 }}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
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
				{/* <TouchableOpacity onPress={() => navigation.navigate("MyWorkouts")}>
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
				</TouchableOpacity> */}
				<View style={{ alignSelf: "center", marginTop: 40 }}>
					<TouchableOpacity onPress={() => handleLogout()}>
						<View
							style={{
								height: 50,
								borderRadius: 10,
								marginRight: 20,
								marginLeft: 20,
								backgroundColor: "#7C0000",
								width: 300,
							}}
						>
							<Text
								style={{
									color: "white",
									alignSelf: "center",
									marginVertical: 10,
									fontSize: 20,
									fontWeight: "bold",
								}}
							>
								Logout
							</Text>
						</View>
					</TouchableOpacity>
				</View>
				{/*<TouchableOpacity onPress={() => clearAsyncStorage()}>
					<Text>Clear Async Storage</Text>
							</TouchableOpacity>*/}
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
