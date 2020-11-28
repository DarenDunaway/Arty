import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native'

const comments = [
    {
      name: "John Doe",
      text:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Jane Doe",
      text:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Johnny Appleseed",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

export default function Comments({}) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    function renderComment(comment, i) {
        return (
                <View key={i}>
                    <Text style={styles.container}>{comment.name}</Text>
                    <Text>{comment.text}</Text>
                    <Text></Text>
                    
                </View>
        )
    };

    return(
        <View style={styles.modal}>
            {comments.map(renderComment)}

            <Text></Text>
            <TextInput
            style={styles.inputText}
            placeholder="Comment"
            title={title}
            onChangeText={(event) => setTitle(event)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        width: 300,
    },
    container: {
        fontWeight: "bold",
    },
    inputText: {
      height: 50,
      borderColor: "black",
      borderWidth: 1,
      margin: 5,
      padding: 5,
      width: "90%",
      justifyContent: "center",
      alignItems: "center",
    },
    openButton: {
        backgroundColor: "black",
        borderRadius: 10,
        padding: 10,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center'
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
  });