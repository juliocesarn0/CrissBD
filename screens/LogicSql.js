import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import SyntaxHighlighter from "react-native-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/styles/hljs";

const SqlCode = () => {
  const sqlCode = `DROP TABLE Pedidos;
  DROP TABLE Jogos;
  DROP TABLE Fornecedores;
  DROP TABLE Vendedores;
  DROP TABLE Clientes;
  
  
  CREATE TABLE Clientes (
      ID_Cliente INT PRIMARY KEY,
      Nome VARCHAR(100) NOT NULL,
      Email VARCHAR(100) UNIQUE NOT NULL,
      Endereco VARCHAR(255),
      Telefone VARCHAR(20),
      DataNascimento DATE,
      Genero VARCHAR(20),
      EstadoCivil VARCHAR(20),
      CPF CHAR(14) UNIQUE
  );
  
  CREATE TABLE Fornecedores (
      ID_Fornecedor INT PRIMARY KEY,
      NomeEmpresa VARCHAR(100) NOT NULL,
      Email VARCHAR(100) UNIQUE NOT NULL,
      Endereco VARCHAR(255),
      Telefone VARCHAR(20),
      Cidade VARCHAR(50),
      Estado VARCHAR(2),
      CNPJ CHAR(18) UNIQUE
  );
  
  CREATE TABLE Jogos (
      CodigoJogo INT PRIMARY KEY,
      Jogo VARCHAR(100) NOT NULL,
      Preco DECIMAL(10, 2) NOT NULL,
      AnoLancamento INT,
      Classificacao VARCHAR(50)
  );
  
  
  CREATE TABLE Pedidos (
      ID_Pedido INT PRIMARY KEY,
      ID_Cliente INT NOT NULL,
      ID_Jogo INT NOT NULL,
      DataPedido DATE NOT NULL,
      Quantidade INT NOT NULL,
      CONSTRAINT FK_ClientePedido FOREIGN KEY (ID_Cliente) REFERENCES Clientes(ID_Cliente),
      CONSTRAINT FK_JogoPedido FOREIGN KEY (ID_Jogo) REFERENCES Jogos(ID_Jogo)
  );
  
  CREATE TABLE Vendedores (
      ID_Vendedor INT PRIMARY KEY,
      Nome VARCHAR(100) NOT NULL,
      Email VARCHAR(100) UNIQUE NOT NULL,
      Telefone VARCHAR(20),
      Cargo VARCHAR(50)
  );
  
  -- Inserts...
  INSERT INTO Clientes (ID_Cliente, Nome, Email, Endereco, Telefone, DataNascimento, Genero, EstadoCivil, CPF)
  VALUES (1, 'oscar alho', 'oscaralho@email.com', 'Rua 123, 123', '123456789', TO_DATE('1999-09-11', 'YYYY-MM-DD'), 'Masculino', 'Solteiro', '123.456.789-00');
  
  INSERT INTO Fornecedores (ID_Fornecedor, NomeEmpresa, Email, Endereco, Telefone, Cidade, Estado, CNPJ)
  VALUES (13, 'odebretch', 'odebretch@email.com', 'rua lula x bolsonaro', '123456789', 'Brasilia', 'DF', '11.999.999/9999-99');
  
  DELETE FROM Fornecedores
  WHERE ID_Fornecedor = 3;
  
  
  -- Selects...
  SELECT * FROM Clientes;
  SELECT * FROM Fornecedores;
  SELECT * FROM Jogos;
  SELECT * FROM Pedidos;
  SELECT * FROM Vendedores;
  `;

  return (
    <ScrollView style={styles.container}>
      <SyntaxHighlighter language="sql" style={darcula}>
        {sqlCode}
      </SyntaxHighlighter>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#272822", // Cor de fundo escura para um tema escuro
  },
});

export default SqlCode;
