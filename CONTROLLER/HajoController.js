import HajoModell from "../MODELL/HajoModell.js";
import Hajok from "../VIEW/Hajok.js";
import HajoTeljes from "../VIEW/HajoTeljes.js";
export default class HajoController {
  /* feladata a model és a view közötti kapcsolattartás
    itt iratkozuk fel az eseméynre
    it példányosítjuk a view modellt */

  #hajoModell = {};
  #hajoView = {};
  constructor() {
    this.#hajoModell = new HajoModell();
    this.ARTICLEELEM = document.querySelectorAll(".tarolo")[0];
    this.KOSARELEM = document.querySelectorAll(".kosar")[0];
    this.rendezGomb = document.querySelector("#rendeznev");
    this.szureskGomb = document.getElementById("szuresfilm");

    /* this.#hajoView =  */ new Hajok(
      this.#hajoModell.getLista(),
      this.ARTICLEELEM,
    );
    console.log(this.#hajoModell.rendezLista());
    console.log(this.#hajoModell.szurtLista());
    this.szureRendezesEsemenykezelok();
  }

  szureRendezesEsemenykezelok() {
    this.rendezGomb.addEventListener("click", () => {
      this.ARTICLEELEM.innerHTML = "";
      new Hajok(this.#hajoModell.rendezLista(), this.ARTICLEELEM);
    });
    this.rendezGomb.addEventListener("click", () => {
      this.ARTICLEELEM.innerHTML = "";
      new Hajok(this.#hajoModell.rendezLista(), this.ARTICLEELEM);
    });
    window.addEventListener("kivalaszt", (event) => {
      console.log(event.detail);
      const ADAT = this.#hajoModell.getAdat(event.detail);
      console.log(ADAT);
      this.ARTICLEELEM.innerHTML = "";
      new HajoTeljes(ADAT, this.ARTICLEELEM);
    });

    window.addEventListener("kosarba", (event) => {
      const KOSAR = this.#hajoModell.getAdat(event.detail);
      new Hajok([KOSAR], this.KOSARELEM);
    });
  }
} //class
