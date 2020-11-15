import * as React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SettingsPage from './SettingsPage'

const Stack = createStackNavigator();

function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Page</Text>
      </View>
    </SafeAreaView>
  )
}

export default function ProfilePage({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Explore Page"
        component={ProfileScreen}
        options={{
          title: 'Arty', headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, headerRight: () => (
            <Button
              onPress={() => navigation.navigate('modal')} 
              type='clear'
              icon={<FontAwesome name="gear" color="white" size={30} />}
            />
          ),
        }}
      />
      <Stack.Screen
        component={SettingsPage}
        name="modal"
        options={{
          animationEnabled: true, title: 'Arty', headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
      </Stack.Screen>
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