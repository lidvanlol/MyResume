import React from "react";
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	StatusBar,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { WorkData } from "../Data/data";

import {
	Headline,
	Title,
	Paragraph,
	Subheading,
	withTheme,
	useTheme,
} from "react-native-paper";
import MenuIcon from "../components/icon";
const Item = ({ jobtitle, employer, startdate, enddate, description }) => {
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
			<Headline style={[styles.jobtitle, { color: colors.text }]}>
				{jobtitle}
			</Headline>
			<Subheading style={[styles.sub, { color: colors.text }]}>
				{employer}
			</Subheading>
			<Paragraph style={[styles.date, { color: colors.text }]}>
				{startdate} - {enddate}
			</Paragraph>
			<Paragraph style={[styles.description, { color: colors.text }]}>
				{description}
			</Paragraph>
		</View>
	);
};

const WorkExperience = () => {
	const { colors } = useTheme();

	const renderItem = ({ item }) => (
		<Item
			jobtitle={item.jobtitle}
			employer={item.employer}
			startdate={item.startdate}
			enddate={item.enddate}
			description={item.description}
		/>
	);

	return (
		<>
			<SafeAreaView>
				<StatusBar style="default" />
				<MenuIcon />
				<ScrollView>
					<Headline style={[styles.title, { color: colors.text }]}>
						Work Experience
					</Headline>
					<FlatList
						data={WorkData}
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
	},
	jobtitle: {
		fontSize: 26,
		fontFamily: "bold",
	},
	title: {
		fontSize: 32,
		textAlign: "center",
		fontFamily: "bold",
		paddingTop: 15,
		paddingBottom: 5,
	},
	sub: {
		fontSize: 24,
		paddingTop: 5,
		fontFamily: "semibold",
	},
	date: {
		fontSize: 24,
		paddingTop: 5,
		fontFamily: "semibold",
	},
	description: {
		paddingTop: 5,
		fontSize: 20,
		fontFamily: "regular",
	},
	menu: {
		position: "relative",

		left: 10,
	},
});

export default withTheme(WorkExperience);
