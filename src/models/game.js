const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  nome: String,
  preco: Number,
  anoLancamento: Number,
  classificacao: String,
  codigoJogo: String,
});

const Jogo = mongoose.model("Jogo", gameSchema);

module.exports = Jogo;
