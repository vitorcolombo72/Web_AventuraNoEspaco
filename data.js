import { AulaManager,Aula,Fase } from "./classes.js";
const fase1 = new Fase([["aaa","bbb","ccc"],["aa","bb","cc"]],[[1000,1000,1000],[10,10,10]]);
const fase2 = new Fase([["ddd","eee","fff"]],[[1000,1000,2000]]);

const fasesAula1 =[];
fasesAula1.push(fase1,fase2);

const Aula1 = new Aula(fasesAula1);
const Aulas = [];
Aulas.push(Aula1);

export const manager = new AulaManager(Aulas);




