import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const comments = [
  {
    name: "John Doe",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Jane Doe",
    text:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Johnny Appleseed",
    text:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function Comments({ }) {
  const [comment, setComment] = useState("");

  function renderComment(comment, i) {
    return (
      <View className="comment" key={i}>
        <Text style={styles.text}>{comment.name}</Text>
        <Text>{comment.text}</Text>
        <Text></Text>
      </View>
    )
  };

  return (
    <View className="comment">
      {comments.map(renderComment)}
      <TextInput
        style={styles.inputText}
        placeholder="Comment"
        title={comment}
        onChangeText={(event) => setComment(event)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputText: {
    height: 60,
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold"
  },
});