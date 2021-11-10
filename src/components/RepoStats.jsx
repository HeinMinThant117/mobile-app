import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	flexContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	statContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 10
	}
});

const RepoStats = ({repo}) => {
	return <View style={styles.flexContainer}>
		<View style={styles.statContainer}>
			<Text style={{fontWeight: 'bold' }}>{repo.stargazersCount > 1000 ? repo.stargazersCount/1000 + 'k': repo.stargazersCount}</Text>
			<Text>Stars</Text>
		</View>
		<View style={styles.statContainer}>
			<Text style={{fontWeight: 'bold' }}>{repo.forksCount > 1000 ? repo.forksCount/1000 + 'k': repo.forksCount}</Text>
			<Text>Forks</Text>
		</View>
		<View style={styles.statContainer}>
			<Text style={{fontWeight: 'bold'  }}>{repo.reviewCount}</Text>
			<Text>Reviews</Text>
		</View>
		<View style={styles.statContainer}>
			<Text style={{fontWeight: 'bold'  }}>{repo.ratingAverage}</Text>
			<Text>Rating</Text>
		</View>
	</View>;
};

export default RepoStats;