// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import FeaturesScreen from './screens/FeaturesScreen';
import NewsletterScreen from './screens/NewsletterScreen';
import AboutScreen from './screens/AboutScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Features" component={FeaturesScreen} />
        <Stack.Screen name="Newsletter" component={NewsletterScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
