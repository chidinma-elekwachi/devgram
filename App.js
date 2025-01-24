import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ContactScreen from './components/screens/Contact/ContactScreen';
import ChatScreen from './components/screens/Chat/ChatScreen';
import SettingsScreen from './components/screens/Settings/SettingsScreen';

function Contact() {
  return (
    <View>
      <ContactScreen />
    </View>
  );
}

function Chat() {
  return (
    <View>
      <ChatScreen />
    </View>
  );
}

function Settings() {
  return (
    <View>
      <SettingsScreen />
    </View>
  );
}

// Properly call createBottomTabNavigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon:({focused, color, size}) => {
            let iconName;

            if (route.name === 'Contact'){
              iconName = focused ? 'call' : 'call-outline';
            }else if (route.name === 'Chat'){
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            } else {
              iconName = focused ? 'settings' : 'settings';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'lightblue'
        })}
      >
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
