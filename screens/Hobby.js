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

import { useNavigation } from "@react-navigation/native";
import { Headline, Title, withTheme } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemeContext } from "../components/ThemeContext";

function Hobby() {
	const navigation = useNavigation();

	const openMenu = () => {
		navigation.openDrawer();
	};

	return (
		<>
			<SafeAreaView>
				<StatusBar style="default" />
				<ScrollView>
					<View>
						<MaterialIcons
							name="menu"
							size={40}
							color="black"
							onPress={openMenu}
							style={styles.menu}
						/>
						<Headline style={styles.title}>My Hobbies</Headline>
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
export default withTheme(Hobby);
