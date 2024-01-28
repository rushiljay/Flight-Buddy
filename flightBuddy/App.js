import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

// Assuming 'Big' component is not related to the query functionality
// import Big from './components/big.jsx';

export default function App() {
  const [inputText, setInputText] = useState(''); // State to store user input
  const [outputText, setOutputText] = useState(''); // State to store API response
  const url = 'http://127.0.0.1:8000/'

  async function callAPI (){
    const outputTextJson = await fetch(url, {
      method: "GET",
      body: encodeURI(inputText)
    }).json();
    outputText = outputTextJson;
  }

  return (

    <View style={style.view}>
      <Text style={style.title}>Attendr</Text>
      <TextInput style={style.input} multiline={true}/>
      <Button
      onPress = {callAPI}
      title = "Submit"
      color = "white"
      />
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    fontSize: 50,
    color: 'red'
  },
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
  submitButton: {

  }
})