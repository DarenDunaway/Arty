import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function ExploreScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Explore Page</Text>
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
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
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
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 1
  },
});