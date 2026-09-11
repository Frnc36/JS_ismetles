/* articel elembe szeretnék elhelyezni card-okat egymás mellett
Hajókról infókat
*/

import HajoController from "./CONTROLLER/HajoController.js";

new HajoController();

/* Minden hajó mellett legyen egy gomb amire kattintva megjelenik annak a hajónka a teljes adatlapja minden infomációval 
OK 1. kell egy gomb a hajó osztályban
OK 2. Hajó osztályba kell egy esemény kezelő a gombra kattintást kezeli és kivált egy saját eseményt ("kivalaszt")
3. A kivalaszt saját eseményre feliratkozunk a controllerben. Itt kell kezelni. hogy lekérjük azt az objektumot a listából ami ehhez a hajóhoz tartozik. 
4. Megjelenitjük az article-ben ezt az egyetlen hajót.
*/

/* Legyen egy gomb a hajoTeljesben amire rákattintunk akkor bele kerül akkor a hajó a kosárba
1. HajoTeljes-be kell egy gomb, aminek kell egy saját esemény("kosarba")
2. A hajoController feliratjozik a kosarba eseményre
3. modellben kell egy kosarLista, ebbe kerül bele a kiválasztott adat, majd modellben kell egy kosárba tagfüggvény
4. modelbe kell egy getKosar tagfüggvény
5. A controller lekéri a mdeltől aaksár tartalmát és példányosítja a kosat divbe a kosár tartalmát(Használd a Hajok osztályt)
*/
