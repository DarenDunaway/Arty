import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function ExploreScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Explore Page. Not Yet Implemented!</Text>
      </View>
    </SafeAreaView>
  )
}

export default function ExplorePage() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Explore Page"
        component={ExploreScreen}
        options={{
          title: 'Arty', headerStyle: {
            backgroundColor: '#EC524B',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "Baskerville-Italic",
            fontSize: 35
          },
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
    backgroundColor: '#f3eac2',
  }
});