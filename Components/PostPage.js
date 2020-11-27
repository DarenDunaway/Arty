import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import { addPost } from "../actions/addPost.js";

export default function PostPage({ navigation }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text>Composition</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Text/File"
        //multiline={true}
        body={body}
        onChangeText={(event) => setBody(event)}
      />
      <Text>Caption</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Caption"
        //multiline={true}
        title={title}
        onChangeText={(event) => setTitle(event)}
      />
      <Button
        title="Post"
        onPress={() => {
          dispatch(
            addPost({
              userId: String(Math.random() * 1000 + 100),
              id: String(Math.random() * 1000 + 100),
              title,
              body,
            })
          );
          navigation.pop();
        }}
      ></Button>
    </KeyboardAvoidingView>
  );
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
