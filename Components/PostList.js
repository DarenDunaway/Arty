import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Modal, TouchableHighlight} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';

export default function PostList(props) {
    const {posts} = props;
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <View style ={{paddingTop: 20}}>
        <ScrollView style={{margin:5}}>
            {posts && posts.map((post) => 
                <Card key={post.id}>
                    <Card.Title>Username and profile picture</Card.Title>
                    <Card.Divider/>
                    <Text style={{marginBottom: 10}}>
                        {`${post.body.slice(0,20)}...`}
                    </Text>
                    <Card.Divider/>
                    <Text>{post.title.toUpperCase()}</Text>
                    <Card.Divider/>

            <Modal
             animationType="fade"
             transparent={true}
             visible={modalVisible}
             >
              <View style={styles.centeredView}>
                 <View style={styles.modalView}>
                   <Text style={styles.modalText}>Display comments and add ability to create comments</Text>
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
            )}
        </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 1,
      backgroundColor: '#ecf0f1',
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
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
      elevation: 10
    },
    openButton: {
      backgroundColor: "black",
      borderRadius: 20,
      padding: 10,
      elevation: 10 
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      color: "black"
    }
  });
  