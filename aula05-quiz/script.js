// PARTE 1: Lista de perguntas e respostas
let perguntas = [
    {
      pergunta: "O que é, o que é? Sobe e desce, mas nunca se move do lugar?",
      respostas: [
        { opcao: "A escada", correto: true },
        { opcao: "O elevador", correto: false },
        { opcao: "O balanço", correto: false }
      ]
    },
    {
      pergunta: "O que é, o que é? Tem dentes, mas não come?",
      respostas: [
        { opcao: "O pente", correto: true },
        { opcao: "O zíper", correto: false },
        { opcao: "O garfo", correto: false }
      ]
    },
    {
      pergunta: "O que é, o que é? Quanto mais se tira, maior fica?",
      respostas: [
        { opcao: "O buraco", correto: true },
        { opcao: "A dívida", correto: false },
        { opcao: "A poeira", correto: false }
      ]
    },
    {
      pergunta: "O que é, o que é? Entra na água e não se molha?",
      respostas: [
        { opcao: "A luz", correto: true },
        { opcao: "O barco", correto: false },
        { opcao: "A sombra", correto: false }
      ]
    },
    {
      pergunta:
        "O que é, o que é? Tem pescoço e não tem cabeça, tem costas e não tem corpo?",
      respostas: [
        { opcao: "A garrafa", correto: true },
        { opcao: "A camisa", correto: false },
        { opcao: "A cadeira", correto: false }
      ]
    }
  ];
  // PARTE 2: Pegando os elementos do HTML
  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");
  
  // PARTE 3: Variáveis para controle do jogo
  let indiceAtual = 0; // Índice da pergunta atual
  let acertos = 0; // Contador de acertos
  
  // PARTE 4: Função para carregar uma nova pergunta
  function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta
  
    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
  
    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
      // Pega a resposta atual com base no índice 'i'
      const resposta = perguntaAtual.respostas[i];
      // Cria um novo elemento 'button' (botão)
      const botao = document.createElement("button");
      // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
      botao.classList.add("botao-resposta");
      // Define o texto do botão com a opção de resposta (resposta.opcao)
      botao.innerText = resposta.opcao;
      // Adiciona um evento de clique no botão
      botao.onclick = function () {
        // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
        if (resposta.correto) {
          acertos++; // Incrementa o contador de acertos (removido o acertos = acertos + 1 duplicado)
        }
  
        // Avança para a próxima pergunta
        indiceAtual++;
  
        // Se ainda houver perguntas, carrega a próxima pergunta
        if (indiceAtual < perguntas.length) {
          carregarPergunta(); // Carrega a próxima pergunta
        } else {
          // Se não houver mais perguntas, finaliza o jogo
          finalizarJogo();
        }
      };
  
      // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
      respostasElemento.appendChild(botao);
    }
  }
  
  // PARTE 5: Função para mostrar a tela final
  function finalizarJogo() {
    // Referências aos elementos HTML
    const conteudoFinal = document.querySelector(".fim");
    const conteudo = document.querySelector(".conteudo");
  
    // Calcula estatísticas
    const totalPerguntas = perguntas.length;
    const percentualAcerto = (acertos / totalPerguntas) * 100;
    const tempoTotal = Math.floor((new Date() - tempoInicio) / 1000); // Tempo em segundos
  
    // Determina mensagem e emoji com base no desempenho
    let mensagem, emoji;
  
    if (percentualAcerto >= 90) {
      mensagem = "Excelente! Você é um gênio dos enigmas!";
      emoji = "🏆";
    } else if (percentualAcerto >= 70) {
      mensagem = "Muito bom! Você tem um ótimo raciocínio!";
      emoji = "🌟";
    } else if (percentualAcerto >= 50) {
      mensagem = "Bom trabalho! Continue praticando!";
      emoji = "👍";
    } else {
      mensagem = "Não desista! Da próxima vez você vai se sair melhor!";
      emoji = "🔄";
    }
  
    // Monta o HTML da tela final
    conteudoFinal.innerHTML = `
      <div class="resultado-container">
        <div class="resultado-titulo">Resultado Final</div>
        <div class="resultado-emoji">${emoji}</div>
        <div class="resultado-pontuacao">${acertos}/${totalPerguntas}</div>
        <div class="resultado-texto">${mensagem}</div>
        <div class="progresso-barra-container">
          <div class="progresso-barra" style="--progress-width: ${percentualAcerto}%;"></div>
        </div>
      </div>
      
      <div class="badges-container">
        <div class="badge">
          <div class="badge-icon">📊</div>
          <div class="badge-value">${percentualAcerto.toFixed(0)}%</div>
          <div class="badge-label">Acertos</div>
        </div>
        <div class="badge">
          <div class="badge-icon">⏱️</div>
          <div class="badge-value">${tempoTotal}s</div>
          <div class="badge-label">Tempo</div>
        </div>
        <div class="badge">
          <div class="badge-icon">🧩</div>
          <div class="badge-value">${totalPerguntas}</div>
          <div class="badge-label">Questões</div>
        </div>
      </div>
      
      <button class="btn-jogar-novamente" onclick="reiniciarJogo()">Jogar Novamente</button>
    `;
  
    // Exibe animação da barra de progresso
    setTimeout(() => {
      const barraProgresso = document.querySelector(".progresso-barra");
      barraProgresso.style.animation = "fillBar 1s forwards";
      barraProgresso.style.width = `${percentualAcerto}%`;
    }, 200);
  
    // Esconde a imagem com id "imagem-jogo"
    const imagem = document.getElementById("imagem-jogo");
    if (imagem) {
      imagem.style.display = "none";
    }
  
    // Esconde as perguntas e mostra a tela final
    conteudo.style.display = "none";
    conteudoFinal.style.display = "flex";
  }
  
  // Função para reiniciar o jogo
  function reiniciarJogo() {
    // Corrigido: Reinicia todas as variáveis de controle necessárias
    acertos = 0;
    indiceAtual = 0; // Corrigido: Estava usando perguntaAtual em vez de indiceAtual
    tempoInicio = new Date();
  
    // Exibe a imagem com id "imagem-jogo"
    const imagem = document.getElementById("imagem-jogo");
    if (imagem) {
      imagem.style.display = "flex";
    }
    // Exibe a seção de perguntas novamente
    document.querySelector(".conteudo").style.display = "flex";
    document.querySelector(".fim").style.display = "none";
  
    // Carrega a primeira pergunta
    carregarPergunta();
  }
  
  // Variáveis para rastrear o tempo de jogo
  let tempoInicio;
  
  // Inicializando o tempo de início ao carregar a primeira pergunta
  window.addEventListener("DOMContentLoaded", () => {
    tempoInicio = new Date();
  });
  
  // PARTE 6: Iniciando o jogo pela primeira vez
  carregarPergunta();
  