/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
	StyleSheet,
	View
} from 'react-native';

import Video360 from 'react-native-video360plugin';

function App(): React.JSX.Element {
	const videoUrl =
		'https://adowindow.com/wp-content/uploads/video360.mp4?fbclid=IwAR2ptsOxD5tW1SkL668GmroGvZQzgIJDLAcYfsPkltx8O9oWZcYUnrrKPVY'

	return (
		<View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>

			<View style={{ width: 300, height: 300 }}>
				<Video360 urlVideo={videoUrl}
					modeVideo={3}
					style={{ flex: 1 }}
					volume={1}
					displayMode='embedded'
					enableInfoButton={true}
					enableFullscreenButton={true}
					enableCardboardButton={true}
					enableTouchTracking={true}
				/>
			</View>

		</View>
	);
}

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
	},
	highlight: {
		fontWeight: '700',
	},
	backgroundVideo: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
});

export default App;
