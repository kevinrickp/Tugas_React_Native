import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const Detail3 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
          <Text></Text>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Kembali</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Detail Xiaomi</Text>
      <Image source={{ uri: 'https://i03.appmifile.com/301_item_in/04/07/2024/9b31a4ebec0586b6f1185fc1122d610b.png' }} style={styles.productImage} resizeMode="contain" />
      <View style={styles.detailContainer}>
            <Text style={styles.detailTitle}>Spesifikasi</Text>
                <Text>Xiaomi 14 Ultra</Text>
                <Text>1 TB</Text>
                <Text>USB Type C</Text>
                <Text>Dynamic AMOLED 2X 120 Hz</Text>
                <Text>Resolusi 1440 x 3200 pixels, 20:9 ratio (~522 ppi density)</Text>
                <Text>50 MP + 50 + 50 MP + 50 MP</Text>
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

export default Detail3;