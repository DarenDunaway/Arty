import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';

export default function PostPage({navigation}) {
  const[compositionText, setCompositionText] = useState('');
  const[captionText, setCaptionText] = useState('');

  return (
    <View style={styles.container}>
      <Text>Composition</Text>
      <TextInput style= {styles.inputText}
      placeholder = "Text/File"
      multiline={true}
      setCompositionText={event=>setCompositionText(event.target.value)}
      compositionText={compositionText}/>
      <Text>Caption</Text>
      <TextInput style= {styles.inputText}
      placeholder = "Caption"
      multiline={true}
      setCaptionText={event=>setCaptionText(event.target.value)}
      captionText={captionText}/>
      <Button title="Post" onPress={() => {navigation.pop()}}>
      </Button>
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
  inputText: {
    height:60, 
    borderColor: "black", 
    borderWidth: 1,
    margin: 15,
    padding: 10,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
