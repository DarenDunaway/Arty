import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const comments = [
    {
      name: "John Doe",
      text:
        "Thats cool",
    },
    {
      name: "Jane Doe",
      text:
        "nice",
    },
    {
      name: "Johnny Appleseed",
      text:
        "thats bitchin",
    },
  ];

export default function Comments({}) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    function renderComment(comment, i) {
        return (
                <View className = "comment" key={i}>
                    <Text fontWeight= "bold">{comment.name}</Text>
                    <Text>-{comment.text}</Text>
                    <Text></Text>
                    
                </View>
        )
    };

    return(
        <View className = "comment">
            {comments.map(renderComment)}

            <TextInput
            style={styles.inputText}
            placeholder="User"
            title={title}
            onChangeText={(event) => setTitle(event)}
            />
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
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    inputText: {
      height: 60,
      borderColor: "black",
      borderWidth: 1,
      margin: 15,
      padding: 10,
      width: "90%",
      justifyContent: "center",
      alignItems: "center",
    },
  });