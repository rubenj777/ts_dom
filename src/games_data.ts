export class Game {
  id: number;
  image: URL;
  title: string;
  genre: string;
  editor: string;
  pegi: number;
  year: number;
  multi: boolean;
  online: boolean;
  constructor(
    aId: number = -1,
    aImage: string,
    aTitle: string,
    aGenre: string,
    aEditor: string,
    aPegi: number,
    aYear: number,
    aMulti: boolean,
    aOnline: boolean
  ) {
    this.id = aId;
    this.image = new URL(aImage);
    this.title = aTitle;
    this.genre = aGenre;
    this.editor = aEditor;
    this.pegi = aPegi;
    this.year = aYear;
    this.multi = aMulti;
    this.online = aOnline;
  }
}
