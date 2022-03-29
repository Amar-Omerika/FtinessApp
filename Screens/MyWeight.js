import React, { useState } from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	TextInput,
	Text,
	Button,
} from "react-native";

export default function MyWeight() {
	const [calories, setCalories] = useState("");
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#121212",
			}}
		>
			<View style={styles.current}>
				<Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
					Current Weight
				</Text>
				<Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
					100kg
				</Text>
			</View>
			<TouchableOpacity>
				<View style={styles.updateWeight}>
					<Text
						style={{
							color: "white",
							alignSelf: "center",
							marginVertical: 12,
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Add Weight
					</Text>
				</View>
			</TouchableOpacity>
			<View
				style={{
					flexDirection: "row",
				}}
			>
				<View
					style={{
						flexDirection: "row",
						backgroundColor: "white",
						marginTop: 30,
						borderRadius: 8,
						marginLeft: 10,
						marginRight: 10,
						width: 200,
						padding: 10,
					}}
				>
					<TextInput
						style={styles.input}
						value={calories}
						onChangeText={setCalories}
						placeholder="calories..."
					></TextInput>
				</View>
				<TouchableOpacity>
					<View style={styles.submit}>
						<Text
							style={{
								color: "white",
								alignSelf: "center",
								marginVertical: 12,
								fontSize: 20,
								fontWeight: "bold",
							}}
						>
							Submit
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
	},
	current: {
		marginLeft: 10,
		marginTop: 20,
	},
	updateWeight: {
		width: 150,
		height: 50,
		backgroundColor: "#7c0000",
		marginTop: 20,
		alignSelf: "flex-end",
		marginRight: 10,
		borderRadius: 100,
	},
	submit: {
		width: 150,
		height: 50,
		backgroundColor: "#7c0000",
		marginTop: 30,
		alignSelf: "flex-end",
		marginRight: 10,
		borderRadius: 100,
	},
});
