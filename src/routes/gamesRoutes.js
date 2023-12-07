const express = require("express");
const router = express.Router();
const Jogo = require("../models/game");

// Rota para adicionar um jogo
router.post("/adicionar-jogo", async (req, res) => {
  try {
    const { nome, preco, anoLancamento, classificacao, codigoJogo } = req.body;

    const novoJogo = new Jogo({
      nome,
      preco,
      anoLancamento,
      classificacao,
      codigoJogo,
    });

    await novoJogo.save();
    res.status(201).json({ message: "Jogo adicionado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao adicionar jogo" });
  }
});

// Rota para buscar todos os jogos
router.get("/buscar-jogos", async (req, res) => {
  try {
    const jogos = await Jogo.find();
    res.json(jogos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar jogos" });
  }
});

module.exports = router;
