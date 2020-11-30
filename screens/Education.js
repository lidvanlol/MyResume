import React from "react";
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	StatusBar,
	ScrollView,
} from "react-native";
import { EducationData } from "../Data/data";
import MenuIcon from "../components/icon";

import {
	Title,
	Paragraph,
	Subheading,
	Headline,
	withTheme,
	useTheme,
} from "react-native-paper";

const Item = ({ school, degree, city, startdate, enddate, description }) => {
	const { colors } = useTheme();
	return (
		<View style={[styles.item, { backgroundColor: colors.backgroundColor }]}>
			<Headline style={[styles.schooltitle, { color: colors.text }]}>
				{school}
			</Headline>
			<Title style={[styles.sub, { color: colors.text }]}>{degree}</Title>
			<Subheading style={[styles.sub, { color: colors.text }]}>
				{city}
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

const Education = () => {
	const { colors } = useTheme();
	const renderItem = ({ item }) => (
		<Item
			school={item.school}
			degree={item.degree}
			city={item.city}
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
						Education
					</Headline>
					<FlatList
						data={EducationData}
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
		backgroundColor: "#e0e0eb",
		padding: 20,
		marginVertical: 10,
		marginHorizontal: 10,
	},
	schooltitle: {
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
		fontSize: 22,
		paddingTop: 5,
		fontFamily: "semibold",
	},
	description: {
		fontFamily: "regular",
		paddingTop: 5,
		fontSize: 20,
	},
	menu: {
		position: "relative",

		left: 10,
	},
});

export default withTheme(Education);
