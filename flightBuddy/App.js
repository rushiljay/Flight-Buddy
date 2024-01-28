import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Button, StatusBar } from 'react-native';



export default function App() {
  const [inputText, setInputText] = useState(''); // State to store user input
  const [outputText, setOutputText] = useState(''); // State to store API response

  return (
    <ScrollView>
      <Text style={styles.title}>Attendr</Text>

      <View style={styles.container}>
        <Text>Hello, I am your digital flight attendant! Let me know what you need!</Text>
        <TextInput
          style={styles.textbox}
          defaultValue="Enter your message here"
          onChangeText={handleInputChange} // Handle text input change
          value={inputText} // Bind inputText state to the TextInput
        />
        <Button title="Submit" color="blue" onPress={handleApiCall} /> {/* Call API on button press */}
        <StatusBar style="auto" />
        <Text>{outputText}</Text> {/* Display API response */}
      </View>
    </ScrollView>
  );
}



});

// This will be the url to call the api
const url = 'https://discord.com/channels/@me/1175558898472730715/1201095457108144239'
// This is the text that the user inputs to the AI
const inputtedText = ''


const getAIResponse = () => {
  fetch(url + '/' + query, {method: 'GET', body: inputtedText});
};
