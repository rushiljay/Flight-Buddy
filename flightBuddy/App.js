import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

import Big from './components/big.jsx';

const [userInput, setUserInput] = useState('')

const onChangeText = () => {
  getAIResponse()
}

export default function App() {
  const [inputText, setInputText] = useState(''); // State to store user input
  const [outputText, setOutputText] = useState(''); // State to store API response

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



});

const getAIResponse = () => {
  fetch(url + '/' + query, {method: 'GET', body: inputtedText});
};
