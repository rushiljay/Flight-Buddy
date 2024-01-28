import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';
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
    setOutputText(outputTextJson);
  }

  return (

    <View style={style.view}>
      <Image source={{uri:'https://1000logos.net/wp-content/uploads/2016/10/American-Airlines-Logo.png'}}/>
      <Text style={style.title}>Attendr</Text>
      <TextInput style={style.input} multiline={true} onChange={text => setInputText(text)}/>
      <Button
      onPress = {callAPI}
      title = "Submit"
      color = "white"
      />
      <Text>{outputText}</Text>

    </View>
  );
}

const style = StyleSheet.create({
  title: {
    fontSize: 50,
    color: '9DA6AB'
  },
  view: {
    fontFamily: 'Helvetica Neue',
    flex: 1,
    paddingTop: 75,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: '#0D73B1',
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