// AkunScreen.js

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AkunScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('Nama Pengguna');

  const handleEditPress = () => {
    setIsEditing(!isEditing);
  };

  const handleChangeText = text => {
    setUsername(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Ionicons
          name="person"
          size={150}
          color="black"
          style={styles.profileIcon}
        />
        {isEditing ? (
          <TextInput
            value={username}
            onChangeText={handleChangeText}
            style={styles.editInput}
          />
        ) : (
          <TouchableOpacity onPress={handleEditPress}>
            <Text style={styles.profileName}>{username}</Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="settings-outline" size={24} color="black" />
        <Text style={styles.buttonText}>Pengaturan Akun</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="log-out-outline" size={24} color="black" />
        <Text style={styles.buttonText}>Keluar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  editInput: {
    fontSize: 24,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'pink',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    width: 300,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'pink',
    borderRadius: 5,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default AkunScreen;
