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
import { useNavigation } from "@react-navigation/native";
import { Headline, Title, Paragraph, Subheading } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

const Item = ({ jobtitle, employer, startdate, enddate, description }) => (
	<View style={styles.item}>
		<Headline style={styles.jobtitle}>{jobtitle}</Headline>
		<Subheading style={styles.sub}>{employer}</Subheading>
		<Paragraph style={styles.date}>
			{startdate} - {enddate}
		</Paragraph>
		<Paragraph style={styles.description}>{description}</Paragraph>
	</View>
);

const WorkExperience = () => {
	const navigation = useNavigation();
	const openMenu = () => {
		navigation.openDrawer();
	};
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

				<ScrollView>
					<MaterialIcons
						name="menu"
						size={40}
						color="black"
						onPress={openMenu}
						style={styles.menu}
					/>

					<Headline style={styles.title}>Work Experience</Headline>
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
		backgroundColor: "#e0e0eb",
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

export default WorkExperience;
