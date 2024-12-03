import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>ERAFONE APP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#007AFF', // Warna biru
    textAlign: 'center',
    letterSpacing: 2, // Tambahan jarak antar huruf
    textTransform: 'uppercase', // Kapital semua huruf
  }
});

export default SplashScreen;