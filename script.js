/*
 */

// 1. Vytvořte pole celých čísel, například počty diváků na několika po sobě jdoucích divadelních představeních. Použijte metodu push a přidejte do pole počet diváků na novém představení.

const numberOfSpectators = [125, 86, 140, 156, 50];
console.log(numberOfSpectators);
numberOfSpectators.push(98);
console.log(numberOfSpectators);

// 2. Vytvořte pole desetinných čísel, například zaplněnost divadla v několika po sobě jdoucích představeních. Poté pomocí metody pop odstraňte poslední hodnotu v poli.
const soldOutRation = [80, 45, 90, 100, 30];
console.log(soldOutRation);
soldOutRation.pop();
console.log(soldOutRation);

// 3. Vytvořte pole řetězců, například seznam názvů několika divadelních představení, která divadlo hraje. Uložte toto pole do proměnné plays. Uložte do jiné proměnné druhou položku tohoto pole.
const plays = ["Romeo a Julie", "Dobytí Severního pólu", "Maryša"];
console.log(plays);
const secondPlay = plays[1];
console.log(secondPlay);

// 4. Uložte do proměnné reviews pole hodnocení, které obdržela divadelní hra Plyšáci na útěku v různých recenzních časopisech. Hodnocení je vždy objekt obsahující název recenzního časopisu jako řetězec a samotné hodnocení jako číslo mezi 1 až 10.
const reviews = [
  {
    medium: "IDNES.cz",
    rating: 5,
  },
  {
    medium: "Kinobox",
    rating: 8,
  },
  {
    medium: "Novinky",
    rating: 6,
  },
];
