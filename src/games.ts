import { Game } from "./games_data";

let moha = new Game(
  1,
  "https://m.media-amazon.com/images/I/51rObOAPnGL._AC_.jpg",
  "medal of honor airborne",
  "fps",
  "EA",
  16,
  2010,
  true,
  false
);

let wow = new Game(
  2,
  "https://www.micromania.fr/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-masterCatalog_Micromania/default/dwa8524f14/images/high-res/1749548_max.jpg?sw=760&sh=760&sm=fit",
  "world of warcraft",
  "rpg",
  "blizzard",
  12,
  2004,
  false,
  true
);

let deusex = new Game(
  3,
  "https://s2.gaming-cdn.com/images/products/64/orig/jeu-steam-deus-ex-human-revolution-cover.jpg",
  "deus ex",
  "fps",
  "square enix",
  18,
  2005,
  false,
  true
);

export let games: Game[] = [moha, wow, deusex];
