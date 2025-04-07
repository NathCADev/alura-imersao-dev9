document.getElementById("iniciarBtn").onclick = function () {
    let personagens = [];
    let viloes = [];
    let forcaPersonagem = 0, forcaViloes = 0;
    let viloesPossiveis = ["Jogador 001", "Thanos", "Sang-Woo", "Front Man", "Dívidas"];

    for (let i = 0; i < 3; i++) {
        let escolhaPersonagem = prompt(`Vamos montar seu time! Digite o nome do personagem ${i + 1}:`);
        if (!escolhaPersonagem) escolhaPersonagem = `Herói ${i + 1}`;
        personagens.push(escolhaPersonagem);
        forcaPersonagem += Math.floor(Math.random() * 10) + 1;

        if (viloesPossiveis.length > 0) {
            let indiceAleatorio = Math.floor(Math.random() * viloesPossiveis.length);
            let vilaoEscolhido = viloesPossiveis.splice(indiceAleatorio, 1)[0];
            viloes.push(vilaoEscolhido);
            forcaViloes += Math.floor(Math.random() * 10) + 1;
        }
    }

    document.getElementById("informacoesJogador").innerText =
        `👨‍🚀 Seu time de heróis: ${personagens.join(", ")} | 💪 Força total: ${forcaPersonagem}`;
    document.getElementById("informacoesComputador").innerText =
        `😈 Time dos vilões: ${viloes.join(", ")} | 💣 Força total: ${forcaViloes}`;

    let resultadoFinal = "";
    if (forcaPersonagem > forcaViloes) {
        resultadoFinal = "🎉 Vitória! Seus heróis salvaram o dia! 🏆";
    } else if (forcaViloes > forcaPersonagem) {
        resultadoFinal = "😵 Poxa... os vilões venceram dessa vez. Tente novamente!";
    } else {
        resultadoFinal = "⚖️ Deu empate! Uma batalha épica, ninguém saiu ganhando!";
    }
    document.getElementById("resultadoFinal").innerText = resultadoFinal;
};
