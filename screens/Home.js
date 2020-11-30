import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	StyleSheet,
	SafeAreaView,
	StatusBar,
	ScrollView,
} from "react-native";
import Social from "./Social";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
	Headline,
	Title,
	Paragraph,
	Subheading,
	withTheme,
} from "react-native-paper";
function Home(props) {
	const { colors, fonts } = props.theme;
	const navigation = useNavigation();
	const openMenu = () => {
		navigation.openDrawer();
	};
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

					<View style={styles.center}>
						<Image
							source={require("../assets/download.png")}
							style={styles.img}
						/>
						<Headline style={styles.h1}>Filip Jovkovic</Headline>
						<Title style={styles.h2}>Front End Developer</Title>
						<Paragraph style={styles.p}>
							Experienced Frontend Developer with a demonstrated history of
							working in the information technology and services industry.
							Skilled in HTML,CSS,SCSS,BOOTSTRAP,JS,JQUERY,React Native,React.
						</Paragraph>
						<Social />
					</View>
				</ScrollView>
			</SafeAreaView>
		</>
	);
}
const styles = StyleSheet.create({
	menu: {
		position: "relative",

		left: 10,
	},

	title: {
		fontSize: 25,
	},
	img: {
		width: 200,
		height: 200,
		borderRadius: 200 / 2,
		margin: 10,
	},
	h1: {
		fontSize: 24,
		paddingBottom: 10,
		fontFamily: "semibold",
	},
	h2: {
		fontSize: 26,
		paddingBottom: 10,
		fontFamily: "bold",
	},
	p: {
		textAlign: "center",
		padding: 10,
		fontSize: 18,
		fontFamily: "regular",
	},
	center: {
		textAlign: "center",
		margin: "auto",
		alignItems: "center",
	},
});
export default withTheme(Home);
