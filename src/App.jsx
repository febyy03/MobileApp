import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {Ionicons} from '@expo/vector-icons'; // Jika menggunakan Expo
import Ionicons from 'react-native-vector-icons/Ionicons'; // Jika tidak menggunakan Expo

// Home Screen
const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Selamat Datang Home Screen</Text>
  </View>
);

// Daftar Screen
const DaftarScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Selamat Datang Daftar Screen</Text>
  </View>
);

// Akun Screen
const AkunScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Selamat Datang Akun Screen</Text>
  </View>
);

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Daftar') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Akun') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Daftar" component={DaftarScreen} />
        <Tab.Screen name="Akun" component={AkunScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default App;
