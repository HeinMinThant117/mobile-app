import React from 'react';
import { Image, Text, View } from 'react-native';
import RepoHeading from './RepoHeading';
import RepoStats from './RepoStats';



const RepositoryItem = ({ repo }) => {
	return <View style={{backgroundColor: '#ffffff', padding: 5  }}>
		<RepoHeading repo={repo} />
		<RepoStats repo={repo} />
	
	{/* <Text>{repo.ownerAvatarUrl}</Text> */}
		{/* <Text>Full name: {repo.fullName}</Text> */}
		{/* <Text>Description: {repo.description}</Text> */}
		{/* <Text>Language: {repo.language}</Text> */}
		{/* <Text>Stars: {repo.stargazersCount}</Text> */}
		{/* <Text>Reviews: {repo.reviewCount}</Text> */}
		{/* <Text>Rating: {repo.ratingAverage}</Text> */}
	</View>;
};

export default RepositoryItem;