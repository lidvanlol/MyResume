import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "react-native-paper";

function MenuIcon() {
	const { colors } = useTheme();
	const navigation = useNavigation();

	const openMenu = () => {
		navigation.openDrawer();
	};
	return (
		<>
			<MaterialIcons
				name="menu"
				size={40}
				onPress={openMenu}
				style={[
					styles.menu,
					{
						color: colors.text,
					},
				]}
			/>
		</>
	);
}
const styles = StyleSheet.create({
	menu: {
		position: "relative",
		left: 10,
	},
});
export default MenuIcon;
