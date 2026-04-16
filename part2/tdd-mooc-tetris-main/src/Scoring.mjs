export class Scoring {
  constructor() {
    this.score = 0;
    this.level = 1;
    this.clearedRows = 0;
  }
  update(rowCount) {
    this.clearedRows += rowCount;
    if (this.clearedRows >= 10) {
      this.level += 1;
    }
    switch (rowCount) {
      case 1:
        this.score += 40;
        break;
      case 2:
        this.score += 100;
        break;
      case 3:
        this.score += 300;
        break;
      case 4:
        this.score += 1200;
        break;
    }
  }
}
