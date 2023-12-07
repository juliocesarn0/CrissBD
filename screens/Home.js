import React, { useContext } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Switch,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../contexts/ThemeContext"; // Importando o ThemeContext

const Home = () => {
  const navigation = useNavigation();
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext); // Acessando o contexto do tema

  const goToAddGame = () => {
    navigation.navigate("AddGame");
  };

  const goToFindGame = () => {
    navigation.navigate("FindGame");
  };

  const goToLogicSql = () => {
    navigation.navigate("LogicSql");
  };

  const goToDiagrama = () => {
    navigation.navigate("Diagrama");
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkModeContainer]}>
      <Image source={require("../assets/Criss.png")} style={styles.image} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={goToAddGame}>
          <Text style={styles.buttonText}>Adicionar Jogos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToFindGame}>
          <Text style={styles.buttonText}>Encontrar Jogos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sqlButton} onPress={goToLogicSql}>
          <Text style={styles.buttonText}>Lógica SQL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sqlButton} onPress={goToDiagrama}>
          <Text style={styles.buttonText}>Diagrama</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.darkModeButtonContainer}>
        <Text style={styles.darkModeText}>Modo Escuro</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          style={styles.darkModeSwitch}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  darkModeContainer: {
    backgroundColor: "#333", // Cor de fundo para o modo escuro
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: "contain",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#007bff",
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  sqlButton: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000",
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  darkModeButtonContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  darkModeText: {
    color: "#fff",
    marginRight: 8,
  },
  darkModeSwitch: {
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }], // Ajusta o tamanho do switch
  },
});

export default Home;
