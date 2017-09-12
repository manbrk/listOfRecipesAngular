export class Recipe {
  public name: string;
  public content: string;
  public dateCreated: object;

  constructor(name: string, content: string, date: object) {
    this.name = name;
    this.content = content;
    this.dateCreated = date;
  }

}

