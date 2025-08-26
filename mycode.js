import { aulas, aprendizadoTexto, aprendizadoImgSrc } from "./FaseManager.js";
var canvas = document.getElementById("canvas"); // referencia ao canvas do jogo
var botaoAvancaTexto = document.getElementById("botaoAvancaTexto");
activateInitialLayout();
if (!canvas) console.log("canvas não encontrado!");
document.getElementById("buttonT").addEventListener("click", function () {
  // EventListener do botão principal de começar
  //document.getElementById("tela-inicial").style.display = "none"; // retira os itens do HTML Inicial
  startGame();
});
// Cria um objeto global para o Godot se comunicar com o JS
window.godotBridge = {
  callback: null,
  _pendingResolve: null, // 🔸 Adiciona isso

  test: function (data) {
    console.log("Mensagem recebida do Godot:", data);

    // 🔸 Aqui resolvemos a promessa, se alguém estiver esperando
    if (this._pendingResolve) {
      this._pendingResolve(data);
      this._pendingResolve = null;
    }
  },

  // Godot chama essa função para registrar a callback
  setCallback: function (cb) {
    this.callback = cb;
    console.log("Callback setada no JS");
  },

  // JS chama essa função para enviar mensagem para o Godot e esperar resposta
  sendMessageAndWait: function (msg) {
    return new Promise((resolve) => {
      this._pendingResolve = resolve;

      if (this.callback) {
        this.callback(msg);
      } else {
        console.warn("Callback não definida ainda");
        resolve(null);
      }
    });
  },

  // Se quiser manter também a versão antiga:
  sendMessageToGodot: function (msg) {
    if (this.callback) {
      this.callback(msg);
    } else {
      console.warn("Callback não definida ainda");
    }
  },
};

let currentPhase = null;
// loop que controla todas fases e aulas
let currentLineIndex = 0;
let listenerAttached = false;
let phaseCompletedResolver = null;
let currentLevel = 1;
let contLearn = 0;
// Inicia o jogo
async function startGame() {
  console.log("Iniciando Jogo!...");
  //await displayLearnPage(aprendizadoTexto[3],aprendizadoImgSrc[3]);
  for (const aula of aulas) {
    for (const fase of aula.fases) {
      console.log(fase.texto);
      await playPhase(fase.texto, fase.speed, fase);
    }
    if (contLearn < 4) {
      await displayLearnPage(
        aprendizadoTexto[contLearn],
        aprendizadoImgSrc[contLearn]
      );
      contLearn++;
      if (contLearn == 1) {
        await displayLearnPage(
          aprendizadoTexto[contLearn],
          aprendizadoImgSrc[contLearn]
        );
        contLearn++;
      }
    }
  }
  await displayMatrixPage();
  await displayFimPage();
}

// Controla a execução de uma fase
function playPhase(textBlocks, speedBlocks, phaseRef) {
  return new Promise((resolve) => {
    activateDiscussionLayout();
    currentLineIndex = 0;
    currentPhase = phaseRef;
    phaseCompletedResolver = resolve;
    showNextLine(textBlocks, speedBlocks);
  });
}

function setLayout(nome) {
  document.body.className = `layout-${nome}`;
}

// Para ativar cada um:
function activateGameLayout() {
  console.log("Ativando Layout de Jogo!");
  setLayout("jogo");
}
function activateDiscussionLayout() {
  console.log("Ativando Layout de Discussão!");
  setLayout("discussao");
}
function activateInitialLayout() {
  console.log("Ativando Layout Inicial!");
  setLayout("inicial");
}
function activateLearnLayout() {
  console.log("Ativando Layout Aprendizado!");
  setLayout("aprendizado");
}
function activateMatrixLayout() {
  console.log("Ativando layout matrix!");
  setLayout("matrix");
}
function activateFimLayout() {
  console.log("Ativando layout Fim!");
  setLayout("fim");
}

// Exibe a próxima linha da fase
function showNextLine(textBlocks, speedBlocks) {
  const container = document.querySelector(".text");
  container.innerHTML = "";

  const lines = textBlocks[currentLineIndex].map((text, i) => ({
    string: text,
    speed: speedBlocks[currentLineIndex][i] || 20,
    pause: i === 1,
  }));

  const characters = [];

  lines.forEach((line, index) => {
    if (index < lines.length - 1) line.string += " ";

    for (const char of line.string) {
      const span = document.createElement("span");
      span.textContent = char;
      container.appendChild(span);
      characters.push({
        span,
        isSpace: char === " " && !line.pause,
        delayAfter: line.speed,
        classes: line.classes || [],
      });
    }
  });

  setTimeout(() => revealCharacters(characters), 600);
}

// Revela os caracteres com efeito typewriter
function revealCharacters(queue) {
  if (queue.length === 0) return;

  const next = queue.shift();
  next.span.classList.add("revealed");
  next.classes.forEach((cls) => next.span.classList.add(cls));

  const delay = next.isSpace && !next.pause ? 0 : next.delayAfter;
  setTimeout(() => revealCharacters(queue), delay);
}

// Adiciona o ouvinte do botão apenas uma vez
if (!listenerAttached) {
  botaoAvancaTexto.addEventListener("click", () => {
    currentLineIndex++;

    if (currentPhase && currentLineIndex < currentPhase.texto.length) {
      showNextLine(currentPhase.texto, currentPhase.speed);
    } else if (phaseCompletedResolver) {
      console.log("entrei no else if!");
      playLevel();
    } else {
      console.warn(
        "phaseCompletedResolver não definido ou currentPhase inconsistente. Forçando playLevel()"
      );
      playLevel(); // garante que o próximo nível seja chamado
    }
  });

  listenerAttached = true;
}

async function playLevel() {
  activateGameLayout();
  if (!godotBridge) {
    console.log("nao foi!!");
  }
  const resposta = await godotBridge.sendMessageAndWait(currentLevel); // 🔸 aguarda Godot
  console.log("Resposta recebida do Godot:", resposta);
  phaseCompletedResolver();
  //activateDiscussionLayout();
  currentLevel++;
}

function displayLearnPage(textoPagina, imgPagina) {
  activateLearnLayout(); // Ativa layout de aprendizado
  setLearnPageText(textoPagina, imgPagina);
  return new Promise((resolve) => {
    const botao = document.getElementById("botaoAprendizado");

    // Garante que não vai adicionar múltiplos ouvintes
    const onClick = () => {
      botao.removeEventListener("click", onClick); // remove para evitar duplicação
      resolve(); // Libera o await
    };

    botao.addEventListener("click", onClick);
  });
}

function setLearnPageText(textoPagina, imgPagina) {
  document.getElementById("tituloH1").textContent = textoPagina[0];

  const paragrafos = document.querySelectorAll(".textoP");
  for (let i = 0; i < paragrafos.length; i++) {
    paragrafos[i].textContent = textoPagina[i + 1];
  }
  const imgs = document.querySelectorAll(".imagemExp");
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].src = imgPagina[i];
  }
}
let planetNames = ["Mercúrio","Vênus","Terra","Marte","Júpiter","Saturno","Urano","Netuno"];
let pedraNames = ["Ametista","Apatita","Diamante","Esmeralda","Fluorita","Rubi","Topázio","Platina"];
let pTexts = ["3 Ametistas em Mercúrio","4 Esmeraldas em Marte","2 Fluoritas em Vênus","5 Platinas em Netuno","1 Rubi em Urano",
  "6 Topázios em Netuno","2 Apatitas em Vênus","3 Ametistas em Saturno","4 Topázios em Urano","1 Platina em Mercúrio"
];
document.getElementById("displayrock").textContent = pTexts[0];
let valuesP = [
  [3,0,0], // 3 Ametistas em Mercúrio
  [4,3,3], // 4 Esmeraldas em Marte
  [2,4,1], // 2 Fluoritas em Vênus
  [5,7,7], // 5 Platinas em netuno
  [1,5,6], // 1 Rubi em Urano
  [6,6,7], // 6 Topázios em netuno
  [2,1,1], // 2 Apatitas em Vênus
  [3,0,5], // 3 Ametistas em Saturno
  [4,6,6], // 4 Topazios em Urano
  [1,7,0] // 1 Platina em Mercúrio

];
let acertos = 1;
function displayMatrixPage() {
  activateMatrixLayout();
  const container = document.getElementById("inputs-container");
  container.innerHTML = ""; // limpa tudo antes de criar

  const size = 8;

  // Canto superior esquerdo vazio
  const emptyCorner = document.createElement("div");
  container.appendChild(emptyCorner);

  // Labels de coluna
  for (let j = 0; j < size; j++) {
    const label = document.createElement("div");
    label.className = "labelcolumn";
    label.textContent = planetNames[j];
    container.appendChild(label);
  }

  for (let i = 0; i < size; i++) {
    // Label de linha
    const rowLabel = document.createElement("div");
    rowLabel.className = "labelrow";
    rowLabel.textContent = pedraNames[i];
    container.appendChild(rowLabel);

    // Inputs da linha
    for (let j = 0; j < size; j++) {
      const input = document.createElement("input");
      input.type = "number";
      input.id = `${i}-${j}`;
      input.value = 0;
      input.max = 9;
      input.min = 0;
      container.appendChild(input);
    }
  }
  return new Promise((resolve) =>{
    verifybutton.addEventListener("click", () => {
  const size = 8;
  let flag = true; // assume que está correto
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const t = document.getElementById(`${i}-${j}`);
      const num = Number(t.value);

      let found = false;
      let expected = 0; // valor esperado para essa célula

      for (let k = 0; k < acertos; k++) {
        if (i === valuesP[k][1] && j === valuesP[k][2]) {
          found = true;
          expected = valuesP[k][0]; // salva o valor correto
          break;
        }
      }

      
      // reset de estilos
      t.classList.remove("input-error");
      t.classList.remove("input-correct");

      if (found && num === expected) {
        t.classList.add("input-correct"); // célula correta
        t.readOnly = true;
      } else if (found && num !== expected) {
        flag = false;
        t.classList.add("input-error"); // valor errado numa célula que deveria ter valor
      } else if (!found && num === 0) {
        // célula correta (deveria ser 0), opcional: pode deixar sem cor ou verde suave
        t.classList.add("input-correct");
      } else if (!found && num !== 0) {
        flag = false;
        t.classList.add("input-error"); // célula que deveria ser 0 mas não é
      }
    }
  }

  if (flag) {
    console.log("acerto!");
    acertos++;
    if(acertos == 11){
      resolve();
    }
    document.getElementById("displayrock").textContent = pTexts[acertos-1];
  } else {
    console.log("erro!");
  }
  
});
  });
}

async function displayFimPage(){
  return new Promise((resolve) =>{
    activateFimLayout();
    
  })
  
}