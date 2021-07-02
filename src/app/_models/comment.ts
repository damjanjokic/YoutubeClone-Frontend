export class Comment {
  text: string;
  username: string;
  created: Date;
  parentId: number;

  constructor() {
    this.text = '';
    this.username = '';
  }
}
