export class Scoring {
  update(rowCount) {
    switch (rowCount) {
      case 1:
        this.score = 40;
        break;
      case 2:
        this.score = 100;
    }
  }
}
