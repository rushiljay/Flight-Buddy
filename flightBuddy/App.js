import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, State } from 'react-native';

// This will be the url to call the api
const url = 'http://127.0.0.1:8000/'

// This is the text that the user inputs to the AI
const inputtedText = ''

const [userInput, setUserInput] = useState('')

const onChangeText = () => {
  getAIResponse()
}

export default function App() {
  return (
    <ScrollView>
      <Text style={styles.title}>Attendr</Text>


    <View style={styles.container}>
      <Text>Hello, I am your digital flight attendant! Let me know what you need!</Text>
      <TextInput style={styles.textbox} onChangeTextdefaultValue="Enter your message here"/>
      
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

const getAIResponse = () => {
  fetch(url + '/' + query, {method: 'GET', body: inputtedText});
};
