import React from "react";
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	StatusBar,
	ScrollView,
	Image,
} from "react-native";
import { skilssData } from "../Data/data";

import { Title, Headline, useTheme } from "react-native-paper";
import MenuIcon from "../components/icon";

const Item = ({ skill, img }) => {
	const { colors } = useTheme();
	return (
		<View
			style={[
				styles.item,
				{
					backgroundColor: colors.backgroundColor,
				},
			]}
		>
			<Title style={[styles.skilltitle, { color: colors.text }]}>{skill}</Title>
			<Image source={img} style={styles.img} />
		</View>
	);
};

const Skills = () => {
	const { colors } = useTheme();
	const renderItem = ({ item }) => <Item skill={item.skill} img={item.img} />;

	return (
		<>
			<SafeAreaView>
				<StatusBar style="default" />
				<MenuIcon />
				<ScrollView style={{ marginBottom: 50 }}>
					<Headline style={[styles.title, { color: colors.text }]}>
						Skills
					</Headline>
					<FlatList
						data={skilssData}
						renderItem={renderItem}
						keyExtractor={(item) => item.id}
					/>
				</ScrollView>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	item: {
		padding: 20,
		margin: 10,
		justifyContent: "center",
		alignItems: "center",
	},

	title: {
		fontSize: 32,
		textAlign: "center",
		fontFamily: "bold",
		paddingTop: 15,
	},
	skilltitle: {
		padding: 10,
		fontSize: 28,
		fontFamily: "semibold",
	},
	menu: {
		position: "relative",

		left: 10,
	},
	img: {
		width: 150,
		height: 150,
		paddingBottom: 10,
	},
});

export default Skills;
