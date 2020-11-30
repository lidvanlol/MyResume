import * as React from "react";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";

import Main from "./index";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const theme = {
	...DefaultTheme,

	// Specify custom property
	myOwnProperty: true,
	// Specify custom property in nested object
	colors: {
		primary: "#6200ee",
		accent: "#03dac4",
		background: "#ccc",

		error: "#B00020",
		text: "#111",
		onBackground: "#000000",
		onSurface: "#000000",
	},
};

function App() {
	let [fontsLoaded] = useFonts({
		regular: require("./assets/fonts/OpenSans-Regular.ttf"),
		bold: require("./assets/fonts/OpenSans-Bold.ttf"),
		semibold: require("./assets/fonts/OpenSans-SemiBold.ttf"),
	});
	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<>
				<PaperProvider theme={theme}>
					<Main />
				</PaperProvider>
			</>
		);
	}
}

export default App;
