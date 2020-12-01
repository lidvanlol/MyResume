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
	ImageBackground,
} from "react-native";
import ImageOverlay from "react-native-image-overlay";
import MenuIcon from "../components/icon";

import { Headline, useTheme } from "react-native-paper";

function Hobby() {
	const { colors } = useTheme();

	return (
		<>
			<SafeAreaView>
				<StatusBar style="default" />
				<MenuIcon />
				<ScrollView style={{ marginBottom: 50 }}>
					<Headline style={[styles.title, { color: colors.text }]}>
						My Hobbies
					</Headline>
					<View style={styles.center}>
						<ImageOverlay
							source={require("../assets/book.jpg")}
							overlayAlpha={0.7}
							title="Book Reading"
							contentPosition="center"
							titleStyle={styles.title}
							containerStyle={{ margin: 10 }}
						/>

						<ImageOverlay
							source={require("../assets/dj.png")}
							overlayAlpha={0.7}
							title="Dj"
							contentPosition="center"
							titleStyle={styles.title}
							containerStyle={{ margin: 10 }}
						/>

						<ImageOverlay
							source={require("../assets/walk.jpg")}
							overlayAlpha={0.7}
							title="Hiking"
							contentPosition="center"
							titleStyle={styles.title}
							containerStyle={{ margin: 10 }}
						/>

						<ImageOverlay
							source={require("../assets/gym.jpg")}
							overlayAlpha={0.7}
							title="Gym"
							contentPosition="center"
							titleStyle={styles.title}
							containerStyle={{ margin: 10 }}
						/>
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
		fontSize: 32,
		textAlign: "center",
		fontFamily: "bold",
	},
	center: {
		textAlign: "center",
		marginTop: 10,
		alignItems: "center",
		fontFamily: "semibold",
	},
});
export default Hobby;
