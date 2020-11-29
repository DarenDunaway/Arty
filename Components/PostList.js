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
import CommentPage from './CommentPage'

export default function PostList(props) {
  const { posts } = props;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <ScrollView>
        {posts &&
          posts.map((post) => (
            <Card
              containerStyle={{
                borderColor: "white",
                backgroundColor: "white",
              }}
              key={post.id}
            >
              <ListItem containerStyle={{
                borderColor: "white",
                backgroundColor: "white",
              }}>
                <Avatar rounded size={50} source={{ uri: post.uri }} />
                <ListItem.Content>
                  <ListItem.Title style={styles.cardUserName}>
                    {post.name}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
              <Card.Divider style={{ backgroundColor: "black" }} />
              <Text style={styles.cardBodyText}>{post.body}</Text>
              <Card.Divider style={{ backgroundColor: "black" }} />
              <Text style={styles.cardCaptionText}>{post.title}</Text>
              <Card.Divider style={{ backgroundColor: "black" }} />
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>
                      <CommentPage />
                    </Text>
                    <TouchableHighlight
                      style={{ ...styles.openButton, backgroundColor: "#9ad3bc" }}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Text style={styles.textStyle}>Submit</Text>
                    </TouchableHighlight>
                    <Text></Text>
                    <TouchableHighlight
                      style={{ ...styles.openButton, backgroundColor: "#9ad3bc" }}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Text style={styles.textStyle}>X</Text>
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
                <Text style={styles.buttonText}>Comments</Text>
              </TouchableHighlight>
            </Card>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
    borderColor: 'black',
    padding: 35,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 100,
    elevation: 10,
  },
  openButton: {
    backgroundColor: "#9AD3BC",
    padding: 10,
    elevation: 10,
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "black",
  },
  cardUserName: {
    fontSize: 20,
    marginLeft: 5,
  },
  cardBodyText: {
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 15,
  },
  cardCaptionText: {
    fontSize: 12,
    fontWeight: "400",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "black",
  },
  buttonText: {
    fontFamily: "GillSans-SemiBold",
    color: "black",
    textAlign: "center",
    fontSize: 15,
  }
});
