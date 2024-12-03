// src/components/Header.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Kembali ke Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

export default Header;
