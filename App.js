import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const buttonPressed = () => {
    setData([...data, { key: text }]);
    setText('');
  }

  const clearData = () => {
    setData(data => []);

  }

  return (
    <View style={styles.container}>
      <View>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text} />
      <Text style={styles.title}>Shopping List</Text>
      <Button onPress={buttonPressed} title="Press me" />
      <Button onPress={clearData} title="Clear data" />
      </View>
      <View style={styles.button}>
      <FlatList style={styles.list}
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
      />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  },
  button: {
    flex: 1,
  
  },
  title: {
    color: 'blue',
    justifyContent: 'center'

  }
});
