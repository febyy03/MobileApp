import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';

const data = [
  {id: '1', title: 'Novel Bumi'},
  {id: '2', title: 'Novel Bulan'},
  {id: '3', title: 'Novel Bintang'},
  {id: '4', title: 'Novel Senja'},
  {id: '5', title: 'Novel Matahari'},
  {id: '6', title: 'Novel Komet'},
  {id: '7', title: 'Novel Ceros'},
  {id: '8', title: 'Novel Batozar'},
  {id: '9', title: 'Novel SiPutih'},
  {id: '10', title: 'Novel Langit'},
];

const DaftarScreen = () => {
  const handlePress = item => {
    Alert.alert('ini adalah novel karangan darwis');
    console.log('Item yang dipilih:', item.title);
    // code di baris 24-27 ini berfungsi agar ketika kita mengklik nya tampil sebuah bacaaan(onpress)
  };
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <Text style={styles.item}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Novel</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'coral',
    borderBottomColor: 'lightgray',
  },
  item: {
    paddingVertical: 10,
    fontSize: 37,
    fontWeight: 'times new roman',
    color: 'pink', // Ubah warna teks menjadi biru
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

export default DaftarScreen;
