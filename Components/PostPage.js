import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';

export default function PostPage({navigation}, props) {
  const[compositionText, setCompositionText] = useState('');
  const[captionText, setCaptionText] = useState('');
  function submitForm(event){

  }

  return (
    <View style={styles.container}>
      <Text>Composition</Text>
      <TextInput style= {styles.inputText}
      placeholder = "Text/File"
      multiline={true}
      setCompositionText={text=>setCompositionText(text)}
      compositionText={compositionText}/>
      <Text>Caption</Text>
      <TextInput style= {styles.inputText}
      placeholder = "Caption"
      multiline={true}
      setCaptionText={text=>setCaptionText(text)}
      captionText={captionText}/>
      <Button title="Post" onPress={() => navigation.pop()}>
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
