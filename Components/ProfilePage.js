import * as React from "react";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Alert,
} from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SettingsPage from "./SettingsPage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createStackNavigator();
var bioName = "John Doe";
var bioOccupation = "Student";
var bioMessage = "default bio";

function ProfileScreen() {
  const [bioMessage = "default bio", setbioMessage] = useState();
  const [bioName = "John Doe", setbioName] = useState();
  const [bioOccupation = "Student", setbioOccupation] = useState();

  function editBio() {
    Alert.alert("Edit Profile", "", [
      { text: "bio", onPress: editBioMessage },
      { text: "name", onPress: editBioName },
      { text: "occupation", onPress: editBioOccupation },
    ]);
  }

  function editBioMessage() {
    Alert.prompt("Edit Bio", "Type your new bio below", (text) => {
      console.log(text);
      setbioMessage(text);
    });
    return console.log(bioMessage);
  }

  function editBioName() {
    Alert.prompt("Edit Name", "Type your new name below", (text) => {
      console.log(text);
      setbioName(text);
    });
    return console.log(bioName);
  }

  function editBioOccupation() {
    Alert.prompt(
      "Edit Occupation",
      "Type your new occupation below",
      (text) => {
        console.log(text);
        setbioOccupation(text);
      }
    );
    return console.log(bioOccupation);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <Button
            type="clear"
            onPress={editBio}
            icon={
              <MaterialCommunityIcons name="pencil" color="grey" size={26} />
            }
          />
        </View>

        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={require("../assets/redondo-beach-to-palos-verdes-sunset1.jpg")}
              style={styles.image}
              resizeMode="center"
            />
          </View>
        </View>

        <View style={styles.bio}>
          <Text style={{ fontWeight: "200", fontSize: 38 }}>{bioName}</Text>
          <Text style={{ fontSize: 18 }}>{bioOccupation}</Text>
          <Text>{bioMessage}</Text>
        </View>

        <View style={styles.metricContainer}>
          <View style={styles.metricBox}>
            <Text style={{ fontSize: 24 }}>23</Text>
            <Text>posts</Text>
          </View>
          <View
            style={[
              styles.metricBox,
              { borderColor: "grey", borderLeftWidth: 1, borderRightWidth: 1 },
            ]}
          >
            <Text style={{ fontSize: 24 }}>420</Text>
            <Text>followers</Text>
          </View>
          <View style={styles.metricBox}>
            <Text style={{ fontSize: 24 }}>300</Text>
            <Text>follows</Text>
          </View>
        </View>

        <View style={{ marginTop: 32 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.catalogContainer}>
              <Image
                source={require("../assets/redondo-beach-to-palos-verdes-sunset1.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
            <View style={styles.catalogContainer}>
              <Image
                source={require("../assets/lmuCampus.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
            <View style={styles.catalogContainer}>
              <Image
                source={require("../assets/Lake.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function ProfilePage({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Explore Page"
        component={ProfileScreen}
        options={{
          title: "Arty",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate("modal")}
              type="clear"
              icon={<FontAwesome name="gear" color="white" size={30} />}
            />
          ),
        }}
      />
      <Stack.Screen
        component={SettingsPage}
        name="modal"
        options={{
          animationEnabled: true,
          title: "Arty",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 1,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 24,
    marginHorizontal: 15,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: "hidden",
  },
  bio: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  metricContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  metricBox: {
    alignItems: "center",
    flex: 1,
  },
  catalogContainer: {
    width: 150,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
});
