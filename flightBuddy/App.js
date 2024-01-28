import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

import Big from './components/big.jsx';



export default function App() {
  return (
    <ScrollView>
      <Text style={styles.title}>Attendr</Text>


    <View style={styles.container}>
      <Text>Hello, I am your digital flight attendant! Let me know what you need!</Text>
      <TextInput style={styles.textbox} defaultValue="Enter your message here"/>
      <Button title="Submit" color="blue"/>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34deeb',
    alignItems: 'center',
    justifyContent: 'center',
    height: 850
  },
  title: {
    fontSize: 50,
    margin: 45,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textbox: {
    marginTop: 10,
    borderWidth: 10,
    fontSize: 30
  }

});

// This will be the url to call the api
const url = 'https://discord.com/channels/@me/1175558898472730715/1201095457108144239'
// This is the text that the user inputs to the AI
const inputtedText = ''


const getAIResponse = () => {
  fetch(url + '/' + query, {method: 'GET', body: inputtedText});
};
