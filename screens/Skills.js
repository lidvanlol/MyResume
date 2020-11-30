// import React from "react";
// import {
// 	SafeAreaView,
// 	View,
// 	FlatList,
// 	StyleSheet,
// 	Text,
// 	StatusBar,
// 	Image,
// } from "react-native";
// import { skilssData } from "../Data/data";

// const Item = ({ skill, img }) => (
// 	<View style={styles.item}>
// 		<Text style={styles.title}>{skill}</Text>
// 		<Image source={img} style={styles.img} />
// 	</View>
// );

// const Skills = () => {
// 	const renderItem = ({ item }) => <Item skill={item.skill} img={item.img} />;

// 	return (
// 		<SafeAreaView style={styles.container}>
// 			<FlatList
// 				data={skilssData}
// 				renderItem={renderItem}
// 				keyExtractor={(item) => item.id}
// 			/>
// 		</SafeAreaView>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		marginTop: StatusBar.currentHeight || 0,
// 	},
// 	item: {
// 		backgroundColor: "#f9c2ff",
// 		padding: 20,
// 		marginVertical: 8,
// 		marginHorizontal: 16,
// 	},
// 	title: {
// 		fontSize: 32,
// 	},
// 	img: {
// 		width: 100,
// 		height: 100,
// 	},
// });

// export default Skills;

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
	Image,
} from "react-native";
import { skilssData } from "../Data/data";
import { useNavigation } from "@react-navigation/native";
import { Title, withTheme } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

const Item = ({ skill, img }) => (
	<View style={styles.item}>
		<Title style={styles.skilltitle}>{skill}</Title>
		<Image source={img} style={styles.img} />
	</View>
);

const Skills = () => {
	const navigation = useNavigation();
	const openMenu = () => {
		navigation.openDrawer();
	};
	const renderItem = ({ item }) => <Item skill={item.skill} img={item.img} />;

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
					<Title style={styles.title}>Skills</Title>
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
		backgroundColor: "#e0e0eb",
		padding: 20,
		margin: 10,
		justifyContent: "center",
		alignItems: "center",
	},

	title: {
		fontSize: 32,
		textAlign: "center",
		fontFamily: "bold",
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

export default withTheme(Skills);
