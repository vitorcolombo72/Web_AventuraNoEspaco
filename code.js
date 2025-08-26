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