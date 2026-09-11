export default class Hajo {
  /* egyetlen hajo megjelenítése */
  #obj = {};
  #szuloElem = "";
  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.#szuloElem = szuloElem;
    this.megjelenit();
    this.buttonElem = document.querySelector(".hajo:last-child button");
    console.log(this.buttonElem);
    this.esemenykezelo();
  }

  megjelenit() {
    const SZOVEG = `
            <div class = "hajo">
                <h2>${this.#obj.nev}</h2>
                <p><span>Kapitány neve: </span>${this.#obj.kapitany}</p>
                <p>Hajó szine: ${this.#obj.szin}</p>
                <button>Kiválaszt</button>
            </div>
        `;
    this.#szuloElem.insertAdjacentHTML("beforeend", SZOVEG);
  }
  esemenykezelo() {
    this.buttonElem.addEventListener("click", () => {
      const E = new CustomEvent("kivalaszt", { detail: this.#obj.id});
      window.dispatchEvent(E);
      console.log(this.#obj.id);
      
    });
  }
}
