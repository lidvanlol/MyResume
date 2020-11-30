import React from "react";
import { View, StyleSheet } from "react-native";
import {
	useTheme,
	Drawer,
	Text,
	TouchableRipple,
	Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { ThemeContext } from "./ThemeContext";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export function DrawerContent(props) {
	const paperTheme = useTheme();

	const { toggleTheme } = React.useContext(ThemeContext);

	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<Drawer.Section style={styles.drawerSection}>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon name="home-outline" color={color} size={size} />
							)}
							label="Home"
							onPress={() => {
								props.navigation.navigate("Home");
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon name="account-outline" color={color} size={size} />
							)}
							label="WorkExperience"
							onPress={() => {
								props.navigation.navigate("WorkExperience");
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon name="bookmark-outline" color={color} size={size} />
							)}
							label="Education"
							onPress={() => {
								props.navigation.navigate("Education");
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon name="settings-outline" color={color} size={size} />
							)}
							label="Skills"
							onPress={() => {
								props.navigation.navigate("Skills");
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon name="account-check-outline" color={color} size={size} />
							)}
							label="Portolio"
							onPress={() => {
								props.navigation.navigate("Portolio");
							}}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon name="account-check-outline" color={color} size={size} />
							)}
							label="Hobby"
							onPress={() => {
								props.navigation.navigate("Hobby");
							}}
						/>
					</Drawer.Section>
					<Drawer.Section title="Preferences">
						<TouchableRipple
							onPress={() => {
								toggleTheme();
							}}
						>
							<View style={styles.preference}>
								<Text>Dark Theme</Text>
								<View pointerEvents="none">
									<Switch value={paperTheme.dark} />
								</View>
							</View>
						</TouchableRipple>
					</Drawer.Section>
				</View>
			</DrawerContentScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	drawerContent: {
		flex: 1,
	},
	userInfoSection: {
		paddingLeft: 20,
	},
	title: {
		fontSize: 16,
		marginTop: 3,
		fontWeight: "bold",
	},
	caption: {
		fontSize: 14,
		lineHeight: 14,
	},
	row: {
		marginTop: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	section: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 15,
	},
	paragraph: {
		fontWeight: "bold",
		marginRight: 3,
	},
	drawerSection: {
		marginTop: 15,
	},
	bottomDrawerSection: {
		marginBottom: 15,
		borderTopColor: "#f4f4f4",
		borderTopWidth: 1,
	},
	preference: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
});
