import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Switch,
  Alert,
  ToastAndroid,
  Linking,
  ImageBackground,
  FlatList,
  StyleSheet,
  Platform,
} from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Home",
      Value: true,
      Username: "",
      dataMahasiswa: [
        { namaMhs: "Kevin", npmMhs: 22081010256 },
        { namaMhs: "Paskal", npmMhs: 22081010 },
        { namaMhs: "Yossie", npmMhs: 22081010235 },
        { namaMhs: "Gusti", npmMhs: 22081010 },
        { namaMhs: "Aileen", npmMhs: 22081010 },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor="transparent"
          barStyle="dark-content"
        />

        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerText}>{this.state.header}</Text>
        </View>

        {/* Image Section */}
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Information", "Anda akan menghapus gambar ini?", [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel ditekan"),
                  style: "cancel",
                },
                { text: "OK", onPress: () => console.log("OK ditekan") },
              ])
            }>
            <ImageBackground
              source={require("./assets/react-native.png")}
              style={styles.imageBackground}
              imageStyle={{ borderRadius: 10 }}>
              <Text style={styles.imageText}>React-Native</Text>
            </ImageBackground>
          </TouchableOpacity>
          
          <View style={{ height: 20 }} />

          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL("https://google.com/")}>
            <Text style={styles.buttonText}>Klik Google</Text>
          </TouchableOpacity>
        </View>

        {/* FlatList Section */}
        <FlatList
          style={styles.flatList}
          data={this.state.dataMahasiswa}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.flatListItem}
              onPress={() =>
                ToastAndroid.show(item.namaMhs + " diklik", ToastAndroid.SHORT)
              }>
              <Text style={styles.flatListText}>{item.namaMhs}</Text>
              <Text style={styles.flatListNpm}>{item.npmMhs}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    backgroundColor: "#00ffff",
    paddingVertical: 25,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  headerText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 26,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  imageBackground: {
    width: 250,
    height: 200,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
  },
  imageText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  switchContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#00ffff",
    width: "85%",
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    elevation: 3,
  },
  buttonText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 18,
  },
  flatList: {
    flex: 1,
    paddingTop: 10,
  },
  flatListItem: {
    backgroundColor: "#00ffff",
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  flatListText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
  },
  flatListNpm: {
    color: "#000000",
    fontSize: 14,
  },
});

export default App;