import { FlatList, StyleSheet, Text, Image, View } from 'react-native'
import React, { useEffect,useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import yelp from "../api/yelp";


const ResultShowScreen = ({route}) => {

	const [result, setResult] = useState(null)

	const id = route.params.id;

	const getResult = async(id) =>{

	const response = await yelp.get(`/${id}`);
	setResult(response.data)
	};

	useEffect(()=>{
		getResult(id);
	},[]);
	if (!result){
		return null;
	}

  return (
	<SafeAreaView>
	  <Text style={styles.title}>{result.name}</Text>
	  <Text style={styles.phone}>{result.phone}</Text>
	  <View>
	  {
		result.is_closed ? <Text style={[styles.isClose,{color:'green'}]}>Acik</Text> : <Text style={[styles.isClose,{color:'red'}]}>Kapali</Text>
	  }
	  </View>

	  <Image
	  style={styles.image}
	  source={result.image_url ? {uri: result.image_url} : null}
	  />

	  <FlatList data={result.photos}
	  renderItem={({item})=>{
		return (<Image style={styles.image} source={{uri: item}}/>);
	  }}
	  />
	  <View style={styles.adress}>
	  <Text >{result.location.address1}</Text>
	  <Text >{result.location.address2}</Text>
	  <Text >{result.location.address3} / {result.location.city}</Text>
	  </View>
	</SafeAreaView>
  )
}

export default ResultShowScreen

const styles = StyleSheet.create({
	container:{flex:1,
	},
	image:{
		 height:180,
		 margin:10,
		 borderWidth:1,
		 borderRadius:20
		},
		title:{
			alignSelf:'center',
			fontSize:30,
			fontWeight:'bold'
		},
		phone:{
			alignSelf:'center',
			fontSize:20,
			fontWeight:'bold'
		},
		isClose:{
			alignSelf:'flex-end',
			fontSize:20,
			fontWeight:'bold',
			marginRight:10,
		},
		adress:{
			alignSelf:'flex-end',
			borderRadius:10,
			marginRight:10,
			padding:10,
			borderWidth:1,
		}

})