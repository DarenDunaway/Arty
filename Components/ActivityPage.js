import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function ActivityScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.header}>Recent Activity</Text>
      </View>

      <View style={{ alignItems: "center", marginBottom: "120%"}}>
        <View style={styles.recentItem1}>
          <View style={styles.recentItemIndicator_online}></View>
          <View style={{ width: 250 }}>
            <Text>
              You Started Following
              <Text style={{ fontWeight: "600" }}> Jane Doe</Text>
            </Text>
          </View>
        </View>

        <View style={styles.recentItem2}>
          <View style={styles.recentItemIndicator_online}></View>
          <View style={{ width: 250 }}>
            <Text>
              You Started Following
              <Text style={{ fontWeight: "600" }}> Johnny Appleseed</Text>
            </Text>
          </View>
        </View>

        <View style={styles.recentItem3}>
          <View style={styles.recentItemIndicator_offline}></View>
          <View style={{ width: 250 }}>
            <Text>
              <Text style={{ fontWeight: "600" }}>Jane Doe</Text> Started
              Following
              <Text style={{ fontWeight: "600" }}> Johnny Appleseed</Text>
            </Text>
          </View>
        </View>

        <View style={styles.recentItem4}>
          <View style={styles.recentItemIndicator_offline}></View>
          <View style={{ width: 250 }}>
            <Text>
              <Text style={{ fontWeight: "600" }}>Jane Doe</Text> Started
              Following
              <Text style={{ fontWeight: "600" }}> You</Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default function ActivityPage() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Activity Page"
        component={ActivityScreen}
        options={{
          title: "Arty",
          headerStyle: {
            backgroundColor: "#EC524B",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "Baskerville-Italic",
            fontSize: 35,
          },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3eac2",
  },
  header: {
    flex: 1,
    justifyContent: "flex-start",
    top: 10,
    fontWeight: 'bold',
    fontSize: 18
  },
  recentItem1: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 10,
  },
  recentItem2: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 10,
  },
  recentItem3: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 10,
  },
  recentItem4: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 10
  },
  recentItemIndicator_offline: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
  recentItemIndicator_online: {
    backgroundColor: "#9ad3bc",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
});
