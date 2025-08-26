export class AulaManager {
  constructor(aulas) {
    this.aulas = aulas;
    this.aulaAtualIndex = 0;
  }
  getAulaAtual() {
    return this.aulas[this.aulaAtualIndex];
  }
  getTextToPass(){
    return this.getAulaAtual().getFaseAtual().getTextoAtual();
  }
  getSpeedToPass(){
    return this.getAulaAtual().getFaseAtual().getSpeedAtual();
  }
  avancarAula() {
    if (this.aulaAtualIndex + 1 < this.aulas.length) {
      this.aulaAtualIndex++;
      return true;
    }
    return false;
  }
  avancarFase() {
    if (!this.getAulaAtual().avancarFase()) {
      console.log("Não foi possível avançar de fase!, passando de aula");
    } else {
      return this.getAulaAtual().avancarFase();
    }
  }
  avancarLinha(){
    return this.getAulaAtual().getFaseAtual().avancarLinha();
  }
}

export class Aula {
  constructor(fases) {
    this.fases = fases;
    this.faseAtualIndex = 0;
  }
  getFases() {
    return this.fases;
  }
  getFaseAtual() {
    return this.fases[this.faseAtualIndex];
  }
  avancarFase() {
    if (this.faseAtualIndex + 1 < this.fases.length) {
      this.faseAtualIndex++;
      return true;
    }
    return false;
  }
}

export class Fase {
  constructor(texto, speed) {
    this.texto = texto;
    this.speed = speed;
    this.linhaAtualIndex = 0;
  }
  getAllTexto() {
    return this.texto;
  }
  getAllSpeed() {
    return this.speed;
  }
  getTextoAtual(){
    return this.texto[this.linhaAtualIndex];
  }
  getSpeedAtual(){
    return this.speed[this.linhaAtualIndex];
  }
  avancarLinha() {
    if (this.linhaAtualIndex + 1 < this.texto.length) {
      this.linhaAtualIndex++;
      return true;
    }
    return false;
  }
}
