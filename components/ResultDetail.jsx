import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ResultDetail = ({result}) => {
  return (
	<View style={styles.container}>
	  <Image
	  style={styles.imageStyle}
	  source={result.image_url ? {uri: result.image_url} : null}
	  />
	  <Text style={[styles.textStyle,{fontSize:18,}]}>{result.name}</Text>
	  <Text style={styles.textStyle}>⭐{result.rating}  (👤{result.review_count})</Text>
	</View>
  )
}

export default ResultDetail

const styles = StyleSheet.create({
	container: {
		width:270, 
		height:200,
	},
	textStyle:{
		fontWeight:'bold'
	},
	imageStyle:{width:250, height:150,
		borderRadius:10,
	}
})