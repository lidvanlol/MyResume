// import React from "react";
// import {
// 	SafeAreaView,
// 	View,
// 	FlatList,
// 	StyleSheet,
// 	Text,
// 	StatusBar,
// 	Image,
// } from "react-native";
// import { skilssData } from "../Data/data";
// const Item = ({ skill, img }) => (
// 	<View style={styles.item}>
// 		<Text style={styles.title}>{skill}</Text>
// 		<Image source={img} style={styles.img} />
// 	</View>
// );
// const Skills = () => {
// 	const renderItem = ({ item }) => <Item skill={item.skill} img={item.img} />;
// 	return (
// 		<SafeAreaView style={styles.container}>
// 			<FlatList
// 				data={skilssData}
// 				renderItem={renderItem}
// 				keyExtractor={(item) => item.id}
// 			/>
// 		</SafeAreaView>
// 	);
// };
// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		marginTop: StatusBar.currentHeight || 0,
// 	},
// 	item: {
// 		backgroundColor: "#f9c2ff",
// 		padding: 20,
// 		marginVertical: 8,
// 		marginHorizontal: 16,
// 	},
// 	title: {
// 		fontSize: 32,
// 	},
// 	img: {
// 		width: 100,
// 		height: 100,
// 	},
// });
// export default Skills;
"use strict";