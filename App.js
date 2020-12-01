import * as React from "react";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import {
	NavigationContainer,
	DefaultTheme as NavigationDefaultTheme,
	DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";

import WorkExperience from "./screens/Experience";
import Education from "./screens/Education";
import Skills from "./screens/Skills";
import Home from "./screens/Home";

import Hobby from "./screens/Hobby";
import Portolio from "./screens/Portolio";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./components/DrawerContent";

import {
	DefaultTheme as PaperDefaultTheme,
	DarkTheme as PaperDarkTheme,
	Provider as PaperProvider,
} from "react-native-paper";
import { ThemeContext } from "./components/ThemeContext";

const App = () => {
	const [isDarkTheme, setIsDarkTheme] = React.useState(false);

	const Drawer = createDrawerNavigator();

	const CustomDefaultTheme = {
		...NavigationDefaultTheme,
		...PaperDefaultTheme,
		colors: {
			...NavigationDefaultTheme.colors,
			...PaperDefaultTheme.colors,
			background: "#ffffff",
			text: "#333333",
			backgroundColor: "#e6e7eb",
			bg: "#ccc",
		},
	};

	const CustomDarkTheme = {
		...NavigationDarkTheme,
		...PaperDarkTheme,

		colors: {
			...NavigationDarkTheme.colors,
			...PaperDarkTheme.colors,
			background: "#333333",
			text: "#ffffff",
			backgroundColor: "#868687",
		},
	};

	const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

	const themeContext = React.useMemo(
		() => ({
			toggleTheme: () => {
				setIsDarkTheme((isDarkTheme) => !isDarkTheme);
			},
		}),
		[]
	);

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
					<ThemeContext.Provider value={themeContext}>
						<NavigationContainer theme={theme}>
							<Drawer.Navigator
								initialRouteName="Home"
								drawerContent={(props) => <DrawerContent {...props} />}
							>
								<Drawer.Screen name="Home" component={Home} />
								<Drawer.Screen
									name="WorkExperience"
									component={WorkExperience}
									options={{ headerShown: false }}
								/>
								<Drawer.Screen
									name="Education"
									component={Education}
									options={{ headerShown: false }}
								/>
								<Drawer.Screen
									name="Skills"
									component={Skills}
									options={{ headerShown: false }}
								/>
								<Drawer.Screen
									name="Portolio"
									component={Portolio}
									options={{ headerShown: false }}
								/>
								<Drawer.Screen
									name="Hobby"
									component={Hobby}
									options={{ headerShown: false }}
								/>
							</Drawer.Navigator>
						</NavigationContainer>
					</ThemeContext.Provider>
				</PaperProvider>
			</>
		);
	}
};

export default App;
