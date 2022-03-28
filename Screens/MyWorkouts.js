import React, { useState } from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	TextInput,
	Text,
	Button,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform } from "expo-modules-core";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function MyWorkouts() {
	const [date, setDate] = useState(new Date());
	const [mode, setMode] = useState("date");
	const [show, setShow] = useState(false);
	const [text, setText] = useState("empty");
	const onChange = (e, selectedDate) => {
		const currentDate = selectedDate || date;
		setShow(Platform.OS === "ios");
		setDate(currentDate);
		let tempDate = new Date(currentDate);
		let formatedDate =
			tempDate.getDate() +
			"/" +
			(tempDate.getMonth() + 1) +
			"/" +
			tempDate.getFullYear();
		setText(formatedDate);
		//console.log(formatedDate);
	};
	const showMod = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	};
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#121212",
			}}
		>
			<TouchableOpacity onPress={() => showMod("date")}>
				<View style={styles.datePicker}>
					<Text
						style={{
							color: "white",
							alignSelf: "center",
							marginVertical: 12,
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Add Date
					</Text>
				</View>
			</TouchableOpacity>
			<View style={{ marginLeft: 10 }}>
				<Text
					style={{
						color: "white",
						marginVertical: 12,
						fontSize: 30,
						fontWeight: "bold",
					}}
				>
					Date
				</Text>
				<Text style={{ color: "white", fontSize: 20 }}>{text}</Text>
			</View>
			{show && (
				<DateTimePicker
					testID="dateTimePicker"
					value={date}
					node={mode}
					is24Hour={true}
					display="default"
					onChange={onChange}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
	},
	datePicker: {
		width: 150,
		height: 50,
		backgroundColor: "#7c0000",
		marginTop: 20,
		alignSelf: "flex-end",
		marginRight: 10,
		borderRadius: 100,
	},
});
