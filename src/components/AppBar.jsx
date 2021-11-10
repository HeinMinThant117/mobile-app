import React from "react";
import Constants from 'expo-constants';
import { Pressable, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		display: "flex",
		justifyContent: "center",
		height: 100,
		backgroundColor: '#24292e',
	},
	barText : {
		color: '#ffffff',
		fontWeight: '700',
		fontSize: 16,
		marginLeft: 10
	}
});

const AppBar = () => {
	return <View style={styles.container}><Pressable><Text style={styles.barText}>Repositories</Text></Pressable></View>;
};

export default AppBar;