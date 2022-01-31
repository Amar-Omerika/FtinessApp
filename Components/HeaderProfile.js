import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import mema from "../assets/mema.png";
import edit from "../assets/edit.png";
export default function HeaderProfile() {
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: "row" }}>
				<View>
					<Image
						source={mema}
						style={{ width: 80, height: 80, marginTop: 40, marginLeft: 20 }}
					/>
				</View>
				<View style={{ marginTop: 50, marginLeft: 30 }}>
					<Text style={{ color: "white", fontSize: 30 }}>Hi,</Text>
					<Text style={{ color: "white", fontSize: 20 }}>Anel Memić</Text>
				</View>
				<View>
					<TouchableOpacity>
						<Image
							source={edit}
							style={{
								width: 40,
								height: 40,
								marginTop: 40,
								marginLeft: 80,
								marginRight: 20,
							}}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
