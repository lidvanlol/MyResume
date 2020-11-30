import React, { Component } from "react";
import {
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableOpacity,
	ScrollView,
	StyleSheet,
} from "react-native";
import { Drawer } from "react-native-paper";
export class CustomDrawerContent extends Component {
	render() {
		return (
			<Drawer.Section>
				<Drawer.Item
					label="Home"
					onPress={() => this.props.navigation.navigate("Home")}
				/>
				<Drawer.Item
					label="Work Experience"
					onPress={() => this.props.navigation.navigate("WorkExperience")}
				/>
				<Drawer.Item
					label="Education"
					onPress={() => this.props.navigation.navigate("Education")}
				/>
				<Drawer.Item
					label="Skills"
					onPress={() => this.props.navigation.navigate("Skills")}
				/>
				<Drawer.Item
					label="Portolio"
					onPress={() => this.props.navigation.navigate("Portolio")}
				/>
				<Drawer.Item
					label="Hobby"
					onPress={() => this.props.navigation.navigate("Hobby")}
				/>
			</Drawer.Section>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F4F5F7",
		alignContent: "center",
		alignItems: "center",
		marginTop: 50,
	},
	drawerStyle: {
		marginTop: 200,
		fontSize: 18,
	},
	header: {
		fontWeight: "bold",
		padding: 10,

		fontSize: 24,
	},
	text: { fontSize: 19, paddingTop: 10 },

	avatar: {
		width: 150,
		height: 150,
		borderRadius: 150 / 2,
		overflow: "hidden",
		borderWidth: 3,
		marginTop: -20,
	},
});
