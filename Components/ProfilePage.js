import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SettingsPage from "./SettingsPage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createStackNavigator();

function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <MaterialCommunityIcons
            name="pencil"
            backgroundColor="grey"
            size={26}
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
          <Text style={{ fontWeight: "200", fontSize: 38 }}>John Doe</Text>
          <Text style={{ fontSize: 18 }}>Student</Text>
          <Text>
            Some stuff about me... I like fishing and running around the lake. I
            used to snowboard but now I really hate the snow because I saw
            bigfoot and he tried to eat me but I slew him with my trusty dagger
          </Text>
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
