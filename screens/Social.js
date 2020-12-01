import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	StyleSheet,
	Linking,
	ScrollView,
} from "react-native";
import { Button } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
function Social() {
	return (
		<>
			<View style={styles.center}>
				<TouchableOpacity
					style={styles.ln}
					onPress={() => {
						Linking.openURL(
							"https://www.linkedin.com/in/filip-jovkovic-59a26a12b/"
						);
					}}
				>
					<Feather name="linkedin" size={30} color="white" />
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => {
						Linking.openURL("https://github.com/lidvanlol?tab=repositories");
					}}
					style={styles.git}
				>
					<Feather name="github" size={30} color="white" />
				</TouchableOpacity>
			</View>
			<Button
				dark
				onPress={() => {
					Linking.openURL("https://resume.io/r/c9mqUlbIM");
				}}
				style={styles.btn}
			>
				<Text style={styles.btnText}>Go To Resume</Text>
			</Button>
		</>
	);
}

const styles = StyleSheet.create({
	center: {
		flexWrap: "wrap",
		alignItems: "flex-start",
		flexDirection: "row",
		paddingTop: 10,
		
	},
	ln: {
		marginRight: 20,
		width: 60,
		height: 60,
		borderRadius: 60 / 2,
		backgroundColor: "#145a67",
		textAlign: "center",
		alignItems: "center",
		paddingTop: 12,
	},

	git: {
		width: 60,
		height: 60,
		borderRadius: 60 / 2,
		backgroundColor: "#0093af",
		textAlign: "center",
		alignItems: "center",
		paddingTop: 12,
	},
	btn: {
		backgroundColor: "#E0DEDE",
		marginTop: 20,
	},
	btnText: {
		fontSize: 22,
		color: "#111",
		fontFamily: "semibold",
	},
});

export default Social;
