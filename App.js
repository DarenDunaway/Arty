import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomePage from "./Components/HomePage";
import ExplorePage from "./Components/ExplorePage";
import ActivityPage from "./Components/ActivityPage";
import ProfilePage from "./Components/ProfilePage";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { fetchPosts } from "./reducers/postReducer";
import { fetchUser } from "./reducers/userReducer";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchPosts);
store.dispatch(fetchUser);

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator barStyle={{ backgroundColor: "#EC524B" }}>
          <Tab.Screen
            name="Home"
            component={HomePage}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: () => (
                <MaterialCommunityIcons name="home" color="white" size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Explore"
            component={ExplorePage}
            options={{
              tabBarLabel: "Explore",
              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name="magnify"
                  color="white"
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Activity"
            component={ActivityPage}
            options={{
              tabBarLabel: "Activity",
              tabBarIcon: () => (
                <MaterialCommunityIcons name="bell" color="white" size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfilePage}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name="account"
                  color="white"
                  size={26}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
