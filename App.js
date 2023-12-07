import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import AddGame from "./screens/AddGame";
import FindGame from "./screens/FindGame";
import { DarkModeProvider } from "./contexts/ThemeContext";
import LogicSql from "./screens/LogicSql";
import Diagrama from "./screens/Diagrama";

const Stack = createStackNavigator();

const App = () => {
  return (
    <DarkModeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="AddGame"
            component={AddGame}
            options={{ title: "Adicionar Jogos" }}
          />
          <Stack.Screen
            name="FindGame"
            component={FindGame}
            options={{ title: "Encontrar Jogos" }}
          />
          <Stack.Screen
            name="LogicSql"
            component={LogicSql}
            options={{ title: "Logica do sql" }}
          />
          <Stack.Screen
            name="Diagrama"
            component={Diagrama}
            options={{ title: "Diagrama" }}
          />
          {/* Outras telas podem ser adicionadas aqui conforme necessário */}
        </Stack.Navigator>
      </NavigationContainer>
    </DarkModeProvider>
  );
};

export default App;
