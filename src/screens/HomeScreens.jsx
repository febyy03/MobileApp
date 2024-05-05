// HomeScreen.js

import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>welcome to my library</Text>
        <Text style={styles.subtitle}>
          Temukan Berbagai Buku Terbaik disini
        </Text>
        <Text style={styles.subtitle}>
          Ada Beberapa Judul Buku Terbaik Disisni Yng Dapat Menjadi Bahan
          Refrensi Bagimu,Klik Pada Bagian Daftar Buku. Untuk Mnegetahui
          BukuKesukannmu
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    backgroundColor: 'plum', // Warna latar belakang putih
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
  },
});

export default HomeScreen;
