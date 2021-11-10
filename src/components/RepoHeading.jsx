import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
	flexContainer: {
		display: 'flex',
		flexDirection: 'row',
		padding: 5,
	},


	
});

const RepoHeading = ({repo}) => {
	return <View style={styles.flexContainer}>
		<Image 
		style={{width: 50, height: 50 }}
		source={{uri:  repo.ownerAvatarUrl }} />
		<View style={{marginLeft: 10  }}>
			<Text style={{marginTop: 5, fontWeight: '700', fontSize: 14 }}>{repo.fullName}</Text>
			<Text style={{marginTop: 5, color: '#576069', fontSize: 12  }}>{repo.description}</Text>
			<Text style={{marginTop: 5, color: '#ffffff', backgroundColor : '#0366d6', width: 100, padding: 5, borderRadius: 5, textAlign: 'center' }}>{repo.language}</Text>
		</View>
	</View>;
};

export default RepoHeading;