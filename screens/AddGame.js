import React, { useState, useContext } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext"; // Importe o ThemeContext

const AddGame = () => {
  const { isDarkMode } = useContext(ThemeContext); // Acessando o contexto do tema
  const [gameInfo, setGameInfo] = useState({
    nome: "",
    preco: "",
    anoLancamento: "",
    classificacao: "",
    codigoJogo: "",
  });

  const handleInputChange = (key, value) => {
    setGameInfo({ ...gameInfo, [key]: value });
  };

  const handleAddGame = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/games/adicionar-jogo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(gameInfo),
        }
      );

      const data = await response.json();
      console.log(data); // Verifica a resposta do servidor
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkModeContainer]}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Jogo"
        value={gameInfo.nome}
        onChangeText={(text) => handleInputChange("nome", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={gameInfo.preco}
        onChangeText={(text) => handleInputChange("preco", text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Ano de Lançamento"
        value={gameInfo.anoLancamento}
        onChangeText={(text) => handleInputChange("anoLancamento", text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Classificação Indicativa"
        value={gameInfo.classificacao}
        onChangeText={(text) => handleInputChange("classificacao", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Código do Jogo"
        value={gameInfo.codigoJogo}
        onChangeText={(text) => handleInputChange("codigoJogo", text)}
      />
      <Button title="Adicionar Jogo" onPress={handleAddGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f0f0f0", // Cor de fundo padrão
  },
  darkModeContainer: {
    backgroundColor: "#333", // Cor de fundo para o modo escuro
  },
  input: {
    height: 40,
    width: "100%",
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    backgroundColor: "#fff", // Cor de fundo padrão para TextInput
  },
});

export default AddGame;
