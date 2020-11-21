import React, {Component, useState} from 'react';
import { TouchableWithoutFeedback, Keyboard, StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';

export default function PostPage({navigation, route}) {
  const[compositionText, setCompositionText] = useState('');
  const[captionText, setCaptionText] = useState('');
  const {createPost} = route.params

function handleCreatePost(event){
  createPost({id: String(Math.random() * 1000 + 100), compositionText, captionText})
}

  return (
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior="padding">
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
        <Button title="Post" onPress={() => {handleCreatePost; navigation.pop()}}>
        </Button>
      </KeyboardAvoidingView>
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
