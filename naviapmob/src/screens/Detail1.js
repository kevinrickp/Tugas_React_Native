import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const Detail1 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text></Text>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Kembali</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Detail iPhone</Text>
      <Image source={{ uri: 'https://raw.githubusercontent.com/hdpngworld/HPW/main/uploads/65038654434d0-iPhone%2015%20Pro%20Natural%20titanium%20png.png' }} style={styles.productImage} resizeMode="contain" />
      <View style={styles.detailContainer}>
        <Text style={styles.detailTitle}>Spesifikasi</Text>
        <Text>iPhone 15 Pro</Text>
        <Text>1 TB</Text>
        <Text>Layar Super Retina XDR</Text>
        <Text>Layar OLED menyeluruh 6,1 inci (diagonal)</Text>
        <Text>Resolusi 2556 x 1179 piksel pada 460 ppi</Text>
        <Text>Dynamic Island</Text>
        <Text style={styles.priceText}>Rp 15.000.000</Text>
        <Text>Stok: Tersedia</Text>
      </View>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Beli Sekarang</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0'
  },
  backButton: {
    marginBottom: 20
  },
  backButtonText: {
    fontSize: 16,
    color: 'blue'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  productImage: {
    width: '100%',
    height: 300,
    marginBottom: 20
  },
  detailContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  buyButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  priceText: {
    fontSize: 24,           // Ukuran font lebih besar
    fontWeight: 'bold',     // Membuat teks tebal
    color: '#007AFF',       // Warna biru (opsional)
    marginVertical: 10      // Margin atas bawah (opsional)
  }
});

export default Detail1;