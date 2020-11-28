import * as React from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { Button } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PostPage from "./PostPage";
import PostList from "./PostList";
import { useSelector } from "react-redux";

const MainStack = createStackNavigator();

function HomeScreen() {
  const posts = useSelector((state) => state.postReducer.posts);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <View style={styles.container}>
        <PostList posts={posts} />
      </View>
    </SafeAreaView>
  );
}

export default function HomePage({ navigation }) {
  return (
    <MainStack.Navigator
      screenOptions={{ animationEnabled: false }}
      mode="modal"
    >
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Arty",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "Baskerville-Italic",
            fontSize: 35,
          },
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate("modal")}
              type="clear"
              icon={
                <MaterialCommunityIcons name="plus" color="white" size={30} />
              }
            />
          ),
        }}
      />
      <MainStack.Screen
        component={PostPage}
        name="modal"
        options={{
          headerBackImage: () => (
            <MaterialCommunityIcons
              style={{ marginLeft: 15 }}
              name="close"
              color="white"
              size={30}
            />
          ),
          headerBackTitleVisible: false,
          animationEnabled: true,
          title: "Arty",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "Baskerville-Italic",
            fontSize: 35,
          },
        }}
      ></MainStack.Screen>
    </MainStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 1,
    backgroundColor: "white",
  },
});
