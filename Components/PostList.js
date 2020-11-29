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
              <ListItem>
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
              <Text style={styles.cardCaptionUsername}>{post.name}</Text>
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
                      <CommentPage/>
                    </Text>
                    <TouchableHighlight
                      style={{ ...styles.openButton, backgroundColor: "black" }}
                      onPress={() => {
                          setModalVisible(!modalVisible);
                      }}
                    >
                      <Text style={styles.textStyle}>Submit</Text>
                    </TouchableHighlight>
                    <Text></Text>
                    <TouchableHighlight
                      style={{ ...styles.openButton, backgroundColor: "black" }}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                    >
<<<<<<< HEAD
                      <Text style={styles.textStyle}>X</Text>
=======
                      <Text style={styles.buttonText}>Close Comments</Text>
>>>>>>> b3a7d483da67334a7cf83838988d3c8b297e29e2
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
<<<<<<< HEAD
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.7)',
=======
    marginTop: 20,
>>>>>>> b3a7d483da67334a7cf83838988d3c8b297e29e2
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
    color: "white",
    textAlign: "center",
    fontSize: 15,
  },
  cardCaptionUsername: {
    fontSize: 15,
    fontWeight: "600",
  },
});
