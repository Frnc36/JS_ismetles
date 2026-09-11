export default class HajoTeljes {
  /* egyetlen hajo megjelenítése */
  #obj = {};
  #szuloElem = "";
  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.#szuloElem = szuloElem;
    this.megjelenit();
  }

  megjelenit() {
    const SZOVEG = `
            <div class = "hajo">
                <h2>${this.#obj.nev}</h2>
                <p><span>Kapitány neve: </span>${this.#obj.kapitany}</p>
                <p>Hajó szine: ${this.#obj.szin}</p>
                <p>Hajó valodi: ${this.#obj.valodi}</p>
                <p>Hajó leiras: ${this.#obj.leiras}</p>
            </div>
        `;
    this.#szuloElem.insertAdjacentHTML("beforeend", SZOVEG);
  }
}
