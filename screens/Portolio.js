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
	Linking,
} from "react-native";
import { portfolioData } from "../Data/data";

import {
	Card,
	Title,
	Paragraph,
	Subheading,
	Button,
	Headline,
	withTheme,
	useTheme,
} from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import MenuIcon from "../components/icon";

const Item = ({ text, link, img, technologiesused }) => {
	const { colors } = useTheme();
	return (
		<View style={styles.item}>
			<Card style={{ backgroundColor: colors.backgroundColor }}>
				<Card.Content>
					<Title style={[styles.cardtitle, { color: colors.text }]}>
						{text}
					</Title>
				</Card.Content>
				<Card.Cover source={img} />
				<Paragraph style={[styles.tech, { color: colors.text }]}>
					Tech used:{"\n"}
					{technologiesused}
				</Paragraph>
				<Card.Actions>
					<Button
						style={[styles.btn, {}]}
						dark
						onPress={() => {
							Linking.openURL(link);
						}}
					>
						<Text style={[styles.btntext, { color: colors.text }]}>
							Go To Link
						</Text>
					</Button>
				</Card.Actions>
			</Card>
		</View>
	);
};

const Portolio = () => {
	const { colors } = useTheme();
	const renderItem = ({ item }) => (
		<Item
			text={item.text}
			link={item.link}
			img={item.img}
			technologiesused={item.technologiesused}
		/>
	);

	return (
		<>
			<SafeAreaView>
				<StatusBar style="default" />
				<MenuIcon />

				<ScrollView style={{ marginBottom: 40 }}>
					<Headline style={[styles.title, { color: colors.text }]}>
						Portfolio
					</Headline>
					<FlatList
						data={portfolioData}
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
		margin: 20,
	},

	menu: {
		position: "relative",

		left: 10,
	},
	title: {
		fontSize: 32,
		textAlign: "center",
		fontFamily: "bold",
		paddingTop: 20,
		paddingBottom: 10,
	},
	cardtitle: {
		textAlign: "center",
		paddingBottom: 10,
		fontSize: 24,
		fontFamily: "semibold",
	},
	tech: {
		padding: 10,
		fontSize: 20,
		fontFamily: "semibold",
	},

	btntext: {
		fontSize: 22,

		fontFamily: "semibold",
	},
});

export default Portolio;
