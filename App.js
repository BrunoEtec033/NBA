import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Perfil1 from './component/Perfil1';
import Perfil2 from './component/Perfil2';
import Perfil3 from './component/Perfil3';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;
            if (route.name === 'Minnesota Timberwolves') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Oklahoma City Thunder') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Boston Celtics') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={focused ? '#007AFF' : '#8e8e93'} />;
          },
        })}
      >
        <Tab.Screen name="Minnesota Timberwolves" component={Perfil1} />
        <Tab.Screen name="Oklahoma City Thunder" component={Perfil2} />
        <Tab.Screen name="Boston Celtics" component={Perfil3} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});