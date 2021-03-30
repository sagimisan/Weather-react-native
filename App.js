import React from "react";
import { StyleSheet, View } from "react-native";
import Navigation from "./components/Navigation";

function App() {

  return (
    <View style={{
      background: new Date().getHours() > 17 ?
        "linear-gradient(to top, #000428, #004e92)"
        : "linear-gradient(to top, #021B79, #0575E6)"
      , flex: "1"
    }}>
      <View style={styles.app}  >
        <Navigation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default App;
