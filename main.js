import {manager} from "./data.js";
var canvas = document.getElementById("canvas"); // referencia ao canvas do jogo
var botaoAvancaTexto = document.getElementById("botaoAvancaTexto");
activateInitialLayout();
if (!canvas) console.log("canvas não encontrado!");
document.getElementById("buttonT").addEventListener("click", function () {
  // EventListener do botão principal de começar
  startGame();
});

async function startGame() {
  console.log("Iniciando Jogo!...");
  console.log(manager.getTextToPass());
  console.log(manager.getSpeedToPass());
  manager.avancarLinha();
  console.log(manager.getTextToPass());
  console.log(manager.getSpeedToPass());
  //await playPhase(manager);
}

function playPhase(textBlocks, speedBlocks) {
  return new Promise((resolve) => {
    activateDiscussionLayout();
    currentLineIndex = 0;
    //currentPhase = phaseRef;
    phaseCompletedResolver = resolve;
    showNextLine(textBlocks, speedBlocks);
  });
}

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








