import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

// Assuming 'Big' component is not related to the query functionality
// import Big from './components/big.jsx';

export default function App() {
  const [inputText, setInputText] = useState(''); // State to store user input
  const [outputText, setOutputText] = useState(''); // State to store API response

  return (

    <View style={style.view}>
      <TextInput style={style.input} multiline={true}/>
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: '#0078D2',
  },
  input: {
    fontSize: 20,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 2,
    width: '80%',
    minHeight: 100,
    backgroundColor: '#36495A',
    borderColor: '#36495A',
    color: 'white',
  },
})