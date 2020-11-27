import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal,
  TouchableHighlight,
} from "react-native";
import { Card, ListItem, Avatar } from "react-native-elements";

const users = [
  {
    name: "John Doe",
    avatar_url:
      "https://images.generated.photos/YK8FaJrvA_kB8sh6QgrOkanq6G8ak3W7c62DjW1dcpA/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyODM3MjAuanBn.jpg",
  },
  {
    name: "Jane Doe",
    avatar_url:
      "https://images.generated.photos/Q3jx0x773rW6MB2AaHQCztPKNmjoQWqH2jXsuND_T4g/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5MDAwODkuanBn.jpg",
  },
  {
    name: "Johnny Appleseed",
    avatar_url:
      "https://images.generated.photos/jPZ1NQyZT3W99wB8k_2uRLSQCScq0WvhPiJ2Iwyse5M/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyNDM3MjEuanBn.jpg",
  },
];

let profileHolder = { name: "", url: "" };
export default function PostList(props) {
  const { posts } = props;
  const [modalVisible, setModalVisible] = useState(false);

  function getRandomUser() {
    var index = Math.floor(Math.random() * users.length);
    profileHolder.name = users[index].name;
    profileHolder.url = users[index].avatar_url;
    console.log(profileHolder);
    return index;
  }

  return (
    <View style={{ paddingTop: 20 }}>
      <ScrollView style={{ margin: 5 }}>
        {posts &&
          posts.map((post) => (
            <Card key={post.id}>
              <ListItem>
                <Avatar
                  rounded
                  source={{ uri: users[getRandomUser()].avatar_url }}
                />
                <ListItem.Content>
                  <ListItem.Title>{profileHolder.name}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
              <Card.Divider />
              <Text style={{ marginBottom: 10 }}>{post.body}</Text>
              <Card.Divider />
              <Text>{profileHolder.name}</Text>
              <Text>{post.title.toUpperCase()}</Text>
              <Card.Divider />

              <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>
                      Display comments and add ability to create comments
                    </Text>
                    <TouchableHighlight
                      style={{ ...styles.openButton, backgroundColor: "black" }}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Text style={styles.textStyle}>Close Comments</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>

              <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                  setModalVisible(true);
                }}
              >
                <Text style={styles.textStyle}>Comments</Text>
              </TouchableHighlight>
            </Card>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 1,
    backgroundColor: "#ecf0f1",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
    backgroundColor: "black",
    borderRadius: 20,
    padding: 10,
    elevation: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "black",
  },
  image: {
    width: 150,
    height: 150,
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 75,
  },
});
