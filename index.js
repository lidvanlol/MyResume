import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import WorkExperience from "./screens/Experience";
import Education from "./screens/Education";
import Skills from "./screens/Skills";
import Home from "./screens/Home";



import { createDrawerNavigator } from "@react-navigation/drawer";

import Hobby from "./screens/Hobby";
import Portolio from "./screens/Portolio";




export default function Main() {
	const Drawer = createDrawerNavigator();
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Home">
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
	);
}
