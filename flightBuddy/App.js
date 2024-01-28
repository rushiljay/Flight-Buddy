import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Big from './components/big.jsx';

export default function App() {
  return (
    <ScrollView>
      <Text style={styles.title}>Attendr</Text>

      
    <View style={styles.container}>
      <Big>Hello World!!</Big>

      <TextInput defaultValue="Hello, I am your digital flight assistant! Let me know what you need, and I will be happy to help!"/>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    margin: 45,
    fontWeight: 'bold',
    textAlign: 'center'
  }

});
