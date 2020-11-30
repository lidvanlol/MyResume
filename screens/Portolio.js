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
import { useNavigation } from "@react-navigation/native";
import {
	Card,
	Title,
	Paragraph,
	Subheading,
	Button,
	Headline,
} from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

const Item = ({ text, link, img, technologiesused }) => (
	<View style={styles.item}>
		<Card>
			<Card.Content>
				<Title style={styles.cardtitle}>{text}</Title>
			</Card.Content>
			<Card.Cover source={img} />
			<Paragraph style={styles.tech}>
				Tech used:{"\n"}
				{technologiesused}
			</Paragraph>
			<Card.Actions>
				<Button
					style={styles.btn}
					dark
					onPress={() => {
						Linking.openURL(link);
					}}
				>
					<Text style={styles.btntext}>Go TO</Text>
				</Button>
			</Card.Actions>
		</Card>
	</View>
);

const Portolio = () => {
	const navigation = useNavigation();
	const openMenu = () => {
		navigation.openDrawer();
	};
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

				<ScrollView>
					<MaterialIcons
						name="menu"
						size={40}
						color="black"
						onPress={openMenu}
						style={styles.menu}
					/>

					<Headline style={styles.title}>Portolio</Headline>
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
		backgroundColor: "#e0e0eb",

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
	btn: {
		backgroundColor: "#E0DEDE",
	},
	btntext: {
		fontSize: 22,
		color: "#111",
		fontFamily: "semibold",
	},
});

export default Portolio;
