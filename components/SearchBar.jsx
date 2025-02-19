import { StyleSheet, Text, TextInput, SafeAreaView } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <SafeAreaView style={styles.background}>
      <AntDesign
        style={styles.iconStyle}
        name="search1"
        size={30}
        color="black"
      />
      <TextInput style={styles.inputStyle} 
	  placeholder="Search" 
	  autoCorrect={false}
	  autoCapitalize="none"
    onChangeText={onTermChange}
    onEndEditing={onTermSubmit}
    value={term}
	  />
    </SafeAreaView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "lightgrey",
    flexDirection: "row",
    margin: 10,
    height: 50,
    alignItems: "center",
    borderRadius: 20,
  },
  iconStyle: {
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 20,
  },
});
