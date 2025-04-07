function jogar() {
    let rodada = 1;
    let venceu = 4;
    let escolhaJogador;
    let pisoQuebrado;
  
    const container = document.querySelector('.container');
    container.classList.remove('quebrado', 'ganhou');
    void container.offsetWidth; 
  
    while (rodada <= 3) {
      console.log("Rodada: " + rodada);
  
      while (true) {
        pisoQuebrado = Math.floor(Math.random() * 3) + 1;
        escolhaJogador = prompt(`🌟 Nível ${rodada}\nEscolha um dos vidros: 1, 2 ou 3.\nQual deles você acha que é o seguro?`);
  
        if (!/^\d+$/.test(escolhaJogador)) {
          alert("🚫 Ops! Só vale número 1, 2 ou 3.");
          continue;
        }
  
        escolhaJogador = Number(escolhaJogador);
  
        if ([1, 2, 3].includes(escolhaJogador)) {
          break;
        } else {
          alert("🤔 Quase! Só pode 1, 2 ou 3.");
        }
      }
  
      if (escolhaJogador === pisoQuebrado) {
        container.classList.add('quebrado');
        alert("💥 Ai não! Você escolheu o vidro quebrado!\nFim de jogo 😢");
        break;
      } else {
        alert(`✅ Boa! Você desviou do vidro ${pisoQuebrado}. Bora pra próxima!`);
      }
  
      rodada++;
      if (rodada === venceu) {
        container.classList.add('ganhou');
        alert("🎉 Parabéns, você chegou até o final!\nVocê venceu o desafio! 🏆");
      }
    }
  }
  