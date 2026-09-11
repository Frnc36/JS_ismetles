import { HAJOLISTA } from "./adatok.js";

export default class HajoModell {
  #lista = [];
  constructor() {
    this.#lista = HAJOLISTA;
  }

  getLista() {
    return this.#lista;
  }

  rendezLista() {
    /* név szerint ABC */
    return this.#lista.sort((a, b) => {
      if (a.nev < b.nev) {
        return -1; /* nem cserél */
      } else {
        return 1; /* cserél */
      }
      /* return a.nev > b.nev? -1 : 1 */
    });
  }

  szurtLista() {
    /* filmes hajókat adaj vissza */
    const SZURT = this.#lista.filter((a) => {
      return a.valodi == false;
    });

    return SZURT;
  }

  getAdat(id) {
    return this.#lista.find((a) => {
      /* (a) -  lista eleme */
      return a.id == id;
    });
  }
}
