function jogarPPT() {
    let idade = prompt("Olá! Por favor, informe sua idade para começar:");
  
    if (isNaN(idade) || idade.trim() === "") {
      alert("Por favor, insira uma idade válida usando apenas números.");
      return;
    }
  
    idade = Number(idade);
  
    if (idade < 18) {
      alert("Ah não! Este jogo é permitido apenas para maiores de 18 anos.");
      return;
    }
  
    const opcoes = ["Pedra", "Papel", "Tesoura"];
    let escolhaJogador = prompt("Escolha uma opção:\n1 - Pedra\n2 - Papel\n3 - Tesoura");
  
    if (isNaN(escolhaJogador) || escolhaJogador.trim() === "") {
      alert("Por favor, insira um número entre 1 e 3 para jogar.");
      return;
    }
  
    escolhaJogador = Number(escolhaJogador);
  
    if (escolhaJogador < 1 || escolhaJogador > 3) {
      alert("Escolha inválida! Selecione 1, 2 ou 3.");
      return;
    }
  
    const escolhaComputador = Math.floor(Math.random() * 3) + 1;
    const escolhaCompTexto = opcoes[escolhaComputador - 1];
    const escolhaJogadorTexto = opcoes[escolhaJogador - 1];
  
    let resultado = "";
  
    if (escolhaJogador === escolhaComputador) {
      resultado = "Empate! Ambos escolheram " + escolhaCompTexto + ".";
    } else if (
      (escolhaJogador === 1 && escolhaComputador === 3) ||
      (escolhaJogador === 2 && escolhaComputador === 1) ||
      (escolhaJogador === 3 && escolhaComputador === 2)
    ) {
      resultado = "Parabéns, você venceu! 🎉";
    } else {
      resultado = "Que pena! O computador venceu dessa vez. 😢";
    }
  
    alert(`Você escolheu: ${escolhaJogadorTexto}\nComputador escolheu: ${escolhaCompTexto}\n\n${resultado}`);
  }
  
  function jogarAdivinha() {
    const numeroComputador = Math.floor(Math.random() * 10) + 1;
    let palpiteJogador = prompt("Tente adivinhar um número entre 1 e 10:");
  
    // Verifica se o palpite é um número válido
    if (isNaN(palpiteJogador) || palpiteJogador.trim() === "") {
      alert("Por favor, insira um número válido entre 1 e 10.");
      return;
    }
  
    palpiteJogador = Number(palpiteJogador);
  
    if (palpiteJogador < 1 || palpiteJogador > 10) {
      alert("O número deve estar entre 1 e 10. Tente novamente!");
      return;
    }
  
    if (palpiteJogador === numeroComputador) {
      alert("🎉 Parabéns! Você acertou o número!");
    } else {
      alert(`Ops! O número era ${numeroComputador}. Boa sorte na próxima!`);
    }
  }
  