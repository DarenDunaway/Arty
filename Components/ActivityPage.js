import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function ActivityScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Activity Page. Not Yet Implemented</Text>
      </View>
    </SafeAreaView>
  )
}

export default function ActivityPage() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Activity Page"
        component={ActivityScreen}
        options={{
          title: 'Arty', headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "Baskerville-Italic",
            fontSize: 35
          },
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 1,
    backgroundColor: '#ecf0f1',
  }
});