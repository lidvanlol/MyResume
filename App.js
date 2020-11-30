import * as React from "react";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";

import Main from "./index";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const theme = {
	...DefaultTheme,

	// Specify custom property
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
