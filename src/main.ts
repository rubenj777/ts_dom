import "./style.css";
import { Game } from "./games_data";
import { games } from "./games";

let editMode: boolean = false;
let gameBeingEdited: Game;

///////////////
// FUNCTIONS //
///////////////

function getFormValues(): Game {
  let image = (document.getElementById("image") as HTMLInputElement).value;
  let title = (document.getElementById("title") as HTMLInputElement).value;
  let genre = (document.getElementById("genre") as HTMLInputElement).value;
  let editor = (document.getElementById("editor") as HTMLInputElement).value;
  let pegi = (document.getElementById("pegi") as HTMLInputElement)
    .valueAsNumber;
  let year = (document.getElementById("year") as HTMLInputElement)
    .valueAsNumber;
  let multi = (document.getElementById("multi") as HTMLInputElement).checked;
  let online = (document.getElementById("online") as HTMLInputElement).checked;

  return new Game(
    undefined,
    image,
    title,
    genre,
    editor,
    pegi,
    year,
    multi,
    online
  );
}

function displayGame(game: Game) {
  let div = document.createElement("div") as HTMLDivElement;
  div.setAttribute("id", `game-${game.id}`);
  div.classList.add("game");
  let img = document.createElement("img") as HTMLImageElement;
  img.classList.add("img");
  img.src = `${game.image}`;
  div.appendChild(img);

  for (const prop in game) {
    if (prop !== "image") {
      div.innerHTML += `${prop} : ${(game as any)[prop]} <br>`;
    }
  }

  let trash = document.createElement("i") as HTMLElement;
  trash.classList.add("fas", "fa-trash");
  div.appendChild(trash);

  trash.addEventListener("click", function () {
    deleteGame(div, game);
  });

  let pen = document.createElement("i") as HTMLElement;
  pen.classList.add("fas", "fa-pen");
  div.appendChild(pen);
  pen.addEventListener("click", function () {
    editGame(game);
  });
  document.getElementById("games")?.appendChild(div);
}

function displayGames() {
  games.forEach((game) => {
    displayGame(game);
  });
}

function addGame() {
  let newGame = getFormValues();
  newGame.id = games.length + 1;
  games.push(newGame);
  displayGame(newGame);
}

function deleteGame(tagGame: HTMLDivElement, game: Game) {
  tagGame.remove();
  let index = games.indexOf(game);
  if (index != -1) {
    games.splice(index, 1);
  }
}

function editGame(game: Game) {
  (document.getElementById("image") as HTMLInputElement).value =
    game.image.href;
  (document.getElementById("title") as HTMLInputElement).value = game.title;
  (document.getElementById("genre") as HTMLInputElement).value = game.genre;
  (document.getElementById("editor") as HTMLInputElement).value = game.editor;
  (document.getElementById("pegi") as HTMLInputElement).valueAsNumber =
    game.pegi;
  (document.getElementById("year") as HTMLInputElement).valueAsNumber =
    game.year;
  (document.getElementById("multi") as HTMLInputElement).checked = game.multi;
  (document.getElementById("online") as HTMLInputElement).checked = game.online;
  editMode = true;
  gameBeingEdited = game;
}

function formReset() {
  (document.getElementById("form") as HTMLFormElement)?.reset();
}

function submitModif() {
  let editedGame = getFormValues();
  let index = games.indexOf(gameBeingEdited);
  console.log(index);
  if (index != -1) {
    games[index].image = editedGame.image;
    games[index].title = editedGame.title;
    games[index].year = editedGame.year;
    games[index].editor = editedGame.editor;
    games[index].genre = editedGame.genre;
    games[index].multi = editedGame.multi;
    games[index].online = editedGame.online;
    games[index].pegi = editedGame.pegi;
  }
  console.log(editedGame);
  let div = document.getElementById("game-" + gameBeingEdited.id);
  console.log(div);
  div?.querySelector(".img")?.setAttribute("src", editedGame.image.href);
  div!.querySelector(".game")!.innerHTML = `${editedGame.title}`;
}

function init() {
  (document.getElementById("form") as HTMLFormElement)?.addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      if (editMode) {
        submitModif();
        editMode = false;
      } else {
        addGame();
      }
      console.log(this);
      // this.reset();
    }
  );
}

//////////
// CODE //
//////////

displayGames();
init();
