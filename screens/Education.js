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
import { EducationData } from "../Data/data";
import { useNavigation } from "@react-navigation/native";
import { Title, Paragraph, Subheading, Headline } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { withTheme } from "react-native-paper";
const Item = ({ school, degree, city, startdate, enddate, description }) => (
	<View style={styles.item}>
		<Headline style={styles.schooltitle}>{school}</Headline>
		<Title style={styles.sub}>{degree}</Title>
		<Subheading style={styles.sub}>{city}</Subheading>
		<Paragraph style={styles.date}>
			{startdate} - {enddate}
		</Paragraph>
		<Paragraph style={styles.description}>{description}</Paragraph>
	</View>
);

const Education = () => {
	const navigation = useNavigation();
	const openMenu = () => {
		navigation.openDrawer();
	};
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

				<ScrollView>
					<MaterialIcons
						name="menu"
						size={40}
						color="black"
						onPress={openMenu}
						style={styles.menu}
					/>
					<Headline style={styles.title}>Education</Headline>
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
