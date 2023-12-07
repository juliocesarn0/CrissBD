import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Diagrama = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/LojaJogos.png")}
        style={styles.diagrama}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Defina a cor de fundo conforme necessário
  },
  diagrama: {
    width: 1080, // Ajuste a largura conforme necessário
    height: 720, // Ajuste a altura conforme necessário
    resizeMode: "contain",
  },
});

export default Diagrama;
