import Hajo from "./Hajo.js";

/* az osztály dolga, hogy példányostson annyit amennyi van a listában */
export default class Hajok {
  #lista = [];
  #szuloElem = "";
  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.#szuloElem = szuloElem;
    this.megjelenit();
  }

  megjelenit() {
    this.#lista.forEach((elem, index) => {
      new Hajo(
        this.#lista[index],
        this.#szuloElem,
      ); /* miértnem az egész listát? */
      /* new Hajo(this.#lista[elem], this.#szuloElem); */
    });
  }
}
