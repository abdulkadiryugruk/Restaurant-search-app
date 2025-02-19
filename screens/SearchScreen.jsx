import { StyleSheet,  } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

export default function SearchScreen() {
	const [searchApi, results, errorMessage] = useResults();
	const [term, setTerm] = useState('')

	const filterResultsByPrice = (price) => {
		return results.filter((result) => result.price === price);
	}

	return (
		<SafeAreaView style={styles.container}>
			<SearchBar 
			term={term}
			onTermChange={setTerm}
			onTermSubmit={()=>searchApi(term)}
			/>
			{
				errorMessage ? <Text>{errorMessage}</Text> : <>{
					results.length === 0 ? <></> : <>
					<ResultsList 
					title="UCUZ RESTORANTLAR" 
					results={filterResultsByPrice('₺')} 
				/>
				<ResultsList 
					title="ORTA RESTORANTLAR" 
					results={filterResultsByPrice('₺₺')} 
				/>
				<ResultsList 
					title="PAHALI RESTORANTLAR" 
					results={filterResultsByPrice('₺₺₺')} 
				/>
				</>
	}</>
			}
			
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 5,
	},
});
