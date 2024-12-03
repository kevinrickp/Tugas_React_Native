import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';

const Home = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Foto Besar */}
      <View style={styles.bannerContainer}>
        <Image
          source={{ uri: 'https://res.cloudinary.com/df2knrwm3/image/upload/v1563932925/ahbdzwpuwtluibsk9j73.png' }}
          style={styles.bannerImage}
          resizeMode="cover"
        />
      </View>

      {/* Judul Kategori */}
      <Text style={styles.categoryTitle}>Pilih Kategori Smartphone</Text>

      {/* Grid Kategori HP */}
      <View style={styles.gridContainer}>
        <TouchableOpacity
          style={styles.gridItem}
          onPress={() => navigation.navigate('Detail1')}
        >
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMrT71GYALYTZ7QnqSCheoa3zhkNppWGe_kg&s' }}
            style={styles.gridImage}
          />
          <Text style={styles.gridText}>iPhone</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.gridItem}
          onPress={() => navigation.navigate('Detail2')}
        >
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png' }}
            style={styles.gridImage}
          />
          <Text style={styles.gridText}>Samsung</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.gridItem}
          onPress={() => navigation.navigate('Detail3')}
        >
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/XiaomiLogoNew2.png' }}
            style={styles.gridImage}
          />
          <Text style={styles.gridText}>Xiaomi</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0'
  },
  bannerContainer: {
    width: '100%',
    height: 250,
    marginBottom: 20
  },
  bannerImage: {
    width: '100%',
    height: '100%'
  },
  categoryTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  gridItem: {
    alignItems: 'center',
    width: '30%'
  },
  gridImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain'
  },
  gridText: {
    marginTop: 20,
    fontSize: 16
  }
});

export default Home;