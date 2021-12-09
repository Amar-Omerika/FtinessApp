import React from "react";
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
import SECTIONS from "../Components/focusGroupFetch";
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
					}}
				/>
			</SafeAreaView>
		</View>
	);
}

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
