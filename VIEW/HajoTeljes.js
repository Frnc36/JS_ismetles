export default class HajoTeljes {
  /* egyetlen hajo megjelenítése */
  #obj = {};
  #szuloElem = "";
  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.#szuloElem = szuloElem;
    this.kosarElem = document.querySelector(".hajo:last-child button");
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
                <button>Kosarba</button>
            </div>
        `;
    this.#szuloElem.insertAdjacentHTML("beforeend", SZOVEG);
  }
  esemeny() {
    this.kosarElem.addEventListener("click", () => {
      const K = new CustomEvent("kosarba", { detail: this.#obj.id });
      window.dispatchEvent(K);
      console.log(this.#obj.id);
    });
  }
}
