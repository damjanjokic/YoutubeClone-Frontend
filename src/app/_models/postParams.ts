export class PostParams {
  sortBy : string;
  isAscending : boolean;

  constructor() {

    this.sortBy = 'created';
    this.isAscending = true;
  }
}
