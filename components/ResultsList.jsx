import { Text, View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import ResultDetail from "./ResultDetail";
import { useNavigation } from "@react-navigation/native";


export default function ResultsList({ title, results }) {

  const navigation = useNavigation();

  return (
    <View style={{width:'100%'}}>
      <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',color:'red', marginVertical:4}}>{title}</Text>

      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
            onPress={()=>{navigation.navigate('ResultsShow',{id:item.id})}}
            >
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
