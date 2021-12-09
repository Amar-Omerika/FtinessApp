import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	SectionList,
	StatusBar,
	SafeAreaView,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Arms from "./Arms";
import Chest from "./Chest";
import Abs from "./Abs";
import Legs from "./Legs";
import Back from "./Back";
import Shoulder from "./Shoulder";

export default function FocusGroups() {
	const navigation = useNavigation();
	const ListItem = ({ item }) => {
		return (
			<View style={styles.item}>
				<TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
					<Image
						source={{
							uri: item.uri,
						}}
						style={styles.itemPhoto}
						resizeMode="cover"
					/>
				</TouchableOpacity>
				<Text style={styles.itemText}>{item.text}</Text>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			<SafeAreaView style={{ flex: 1, marginBottom: 10 }}>
				<SectionList
					contentContainerStyle={{ paddingHorizontal: 10 }}
					stickySectionHeadersEnabled={false}
					sections={SECTIONS}
					renderSectionHeader={({ section }) => (
						<>
							<Text style={styles.sectionHeader}>{section.title}</Text>
							<FlatList
								horizontal
								data={section.data}
								renderItem={({ item }) => <ListItem item={item} />}
								showsHorizontalScrollIndicator={false}
							/>
						</>
					)}
					renderItem={({ item, section }) => {
						return null;
						//return <ListItem item={item} />;
					}}
				/>
			</SafeAreaView>
		</View>
	);
}
const SECTIONS = [
	{
		title: "The most popular",

		data: [
			{
				key: "1",
				text: "Arms Workouts",
				uri: "https://i.pinimg.com/564x/70/7e/12/707e12b584c9715e6c48846d636edcb1.jpg",
				screen: Arms,
			},
			{
				key: "2",
				text: "Chest Workouts",
				uri: "https://i.pinimg.com/564x/2f/bb/47/2fbb477973d6562882381a3fa59d81ce.jpg",
				screen: Chest,
			},
		],
	},
	{
		title: "The most performed",
		data: [
			{
				key: "1",
				text: "Abs Workouts",
				uri: "https://i.pinimg.com/564x/11/16/fa/1116fa3c662309c5020cdb7e580923a9.jpg",
				screen: Abs,
			},
			{
				key: "2",
				text: "Legs Workouts",
				uri: "https://i.pinimg.com/564x/41/05/f9/4105f9b6e29927159d78062b1a810194.jpg",
				screen: Legs,
			},
		],
	},
	{
		title: "Others",
		data: [
			{
				key: "1",
				text: "Back Workouts",
				uri: "https://i.pinimg.com/564x/cb/db/0c/cbdb0cbfe52f8ce664cb3013005c9fcb.jpg",
				screen: Back,
			},
			{
				key: "2",
				text: "Shoulder Workouts",
				uri: "https://i.pinimg.com/564x/8a/74/a9/8a74a94b5130c8a726e774984ff2395e.jpg",
				screen: Shoulder,
			},
		],
	},
];

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#121212",
	},
	sectionHeader: {
		fontWeight: "800",
		fontSize: 18,
		color: "#f4f4f4",
		marginTop: 20,
		marginBottom: 5,
	},
	item: {
		margin: 10,
	},
	itemPhoto: {
		width: 200,
		height: 200,
	},
	itemText: {
		color: "rgba(255, 255, 255, 0.5)",
		marginTop: 5,
	},
});
