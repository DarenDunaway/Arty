import * as React from 'react';
import {useState} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar , Alert, Modal, TouchableHighlight} from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PostPage from './PostPage'

const MainStack = createStackNavigator();

function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <View style={styles.container}>
        <Card>
          <Card.Title>Username and profile picture</Card.Title>
          <Card.Divider/>
          <Text style={{marginBottom: 10}}>
            Compositions (picture, text, audio file)
          </Text>
          <Card.Divider/>
          <Text style={{marginBottom: 10}}>
            Caption
          </Text>
          <Card.Divider/>
            <Modal
             animationType="none"
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
      </View>
    </SafeAreaView>
  );
}



export default function HomePage() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Arty', headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, headerRight: () => (
            <Button
              //onPress={() => PostModal()} 
              type='clear'
              icon={<MaterialCommunityIcons name="plus" color="white" size={30} />}
            />
          ),
        }}
      />
    </MainStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 1,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 1
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
