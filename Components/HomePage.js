import * as React from 'react';
import {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar , Alert, Modal, TouchableHighlight} from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { StackActions } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PostPage from './PostPage'
import PostList from './PostList'
import { add } from 'react-native-reanimated';

const MainStack = createStackNavigator();

function HomeScreen({navigation}) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setPosts(json))
  }, [])

  useEffect(()=>{
    navigation.setParams({createPost: () => createPost(newPost)})
  }, [navigation.setParams])

  function createPost(newPost){
    setPosts([newPost, ...posts])
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <View style={styles.container}>
        <PostList posts={posts}/>
      </View>
    </SafeAreaView>
  );
}

export default function HomePage({navigation, route}) {
  return (
    <MainStack.Navigator screenOptions={{animationEnabled:false}} mode="modal" >
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
              onPress={() => navigation.navigate("modal", {createPost: route.state.routes[0].params.createPost})} 
              type='clear'
              icon={<MaterialCommunityIcons name="plus" color="white" size={30} />}
            />
          ),
        }}
      />
      <MainStack.Screen
        component={PostPage}
        name="modal"
        options = {{animationEnabled: true, title: 'Arty', headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },}}
      >
      </MainStack.Screen>
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
