const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const gamesRoutes = require("./routes/gamesRoutes");
require("dotenv").config(); // Carrega as variáveis de ambiente do arquivo .env

const app = express();
app.use(bodyParser.json());

// Configuração do CORS para permitir apenas a origem do seu aplicativo React Native
app.use(
  cors({
    origin: "http://localhost:19006",
  })
);

// Conexão com o MongoDB Atlas usando variável de ambiente
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro de conexão com o MongoDB:"));
db.once("open", () => {
  console.log("Conectado ao MongoDB!");
});

app.use("/games", gamesRoutes);

const PORT = process.env.PORT || 3000; // Usar a variável de ambiente do Vercel ou a porta 3000 localmente
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
