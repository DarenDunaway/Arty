import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  View,
  Modal,
  TouchableHighlight,
} from "react-native";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../actions/addPost.js";

export default function PostPage({ navigation }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [fileModalVisible, setFileModalVisible] = useState(false);
  const [tagModalVisible, setTagModalVisible] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.sectionText}>Composition</Text>
      <TextInput
        style={styles.compositionTextBox}
        placeholder="Text/File"
        multiline={true}
        body={body}
        onChangeText={(event) => setBody(event)}
      />
      <Text style={styles.sectionText}>Caption</Text>
      <TextInput
        style={styles.captionTextBox}
        placeholder="Caption"
        multiline={true}
        title={title}
        onChangeText={(event) => setTitle(event)}
      />
      <View style={{ flexDirection: "row" }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={fileModalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                {" "}
                Add a File Page. If a file is added, Composition Text Box is
                disabled. Not Yet Implemented!{" "}
              </Text>
              <TouchableHighlight
                style={styles.closeButton}
                onPress={() => {
                  setFileModalVisible(!fileModalVisible);
                }}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            setFileModalVisible(true);
          }}
        >
          <Text style={styles.buttonText}>Add a File</Text>
        </TouchableHighlight>
        <Modal
          animationType="slide"
          transparent={true}
          visible={tagModalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                {" "}
                Add a Tag Page. Not yet Implemented!{" "}
              </Text>
              <TouchableHighlight
                style={styles.closeButton}
                onPress={() => {
                  setTagModalVisible(!tagModalVisible);
                }}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            setTagModalVisible(true);
          }}
        >
          <Text style={styles.buttonText}>Add a Tag</Text>
        </TouchableHighlight>
      </View>
      <TouchableHighlight
        style={styles.postButton}
        onPress={() => {
          dispatch(
            addPost({
              uri: user.uri,
              userId: String(Math.random() * 1000 + 100),
              id: String(Math.random() * 1000 + 100),
              title,
              body,
              name: user.username,
            })
          );
          navigation.pop();
        }}
      >
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableHighlight>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3EAC2",
    alignItems: "center",
    justifyContent: "center",
  },
  compositionTextBox: {
    height: 225,
    borderColor: "black",
    borderWidth: 1,
    margin: 15,
    padding: 10,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white'
  },
  captionTextBox: {
    height: 125,
    borderColor: "black",
    borderWidth: 1,
    margin: 15,
    padding: 10,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white'
  },
  sectionText: {
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
  },
  openButton: {
    backgroundColor: "#EC524B",
    elevation: 10,
    height: 50,
    margin: 5,
    width: "44%",
    textAlign: "center",
    justifyContent: "center",
  },
  closeButton: {
    backgroundColor: "black",
    elevation: 10,
    height: 50,
    width: 100,
    textAlign: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
    color: "black",
  },
  postButton: {
    backgroundColor: "#EC524B",
    color: "#FE434C",
    elevation: 10,
    height: 50,
    margin: 10,
    width: "90%",
    textAlign: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "GillSans-SemiBold",
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  postButtonText: {
    fontFamily: "GillSans-SemiBold",
    color: "white",
    textAlign: "center",
    fontSize: 20,
  }
});
