import React, { useState, useEffect, useContext } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext"; // Importe o ThemeContext

const FindGame = () => {
  const { isDarkMode } = useContext(ThemeContext); // Acessando o contexto do tema
  const [jogos, setJogos] = useState([]);
  const [expandedJogo, setExpandedJogo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchJogos() {
      try {
        const response = await fetch(
          "http://localhost:3000/games/buscar-jogos"
        );
        const data = await response.json();
        setJogos(data);
      } catch (error) {
        console.error("Erro ao buscar os jogos:", error);
      }
    }

    fetchJogos();
  }, []);

  const handleJogoPress = (jogoId) => {
    if (expandedJogo === jogoId) {
      setExpandedJogo(null);
    } else {
      setExpandedJogo(jogoId);
    }
  };

  const filteredJogos = jogos.filter((jogo) =>
    jogo.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={[{ flex: 1 }, isDarkMode && { backgroundColor: "#333" }]}>
      <TextInput
        placeholder="Pesquisar por nome do jogo"
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 10,
          margin: 10,
          backgroundColor: isDarkMode ? "#444" : "#fff",
          color: isDarkMode ? "#fff" : "#000",
        }}
      />
      <Text style={{ color: isDarkMode ? "#fff" : "#000" }}>
        Lista de Jogos:
      </Text>
      <View>
        {filteredJogos.map((jogo) => (
          <TouchableOpacity
            key={jogo._id}
            onPress={() => handleJogoPress(jogo._id)}
            style={{
              backgroundColor:
                expandedJogo === jogo._id ? "lightgrey" : "white",
              padding: 10,
              margin: 5,
              borderRadius: 5,
            }}
          >
            <Text>{jogo.nome}</Text>
            {expandedJogo === jogo._id && (
              <View>
                <Text>Preço: {jogo.preco}</Text>
                <Text>Ano de Lançamento: {jogo.anoLancamento}</Text>
                <Text>Classificação: {jogo.classificacao}</Text>
                <Text>Código do Jogo: {jogo.codigoJogo}</Text>
                {/* Adicione outros campos conforme necessário */}
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default FindGame;
