export class ScoringSystem {
  constructor() {
    this.score = 0;
    this.level = 1;
    this.clearedRows = 0;
  }
  update(rowCount) {
    this.clearedRows += rowCount;
    switch (rowCount) {
      case 1:
        this.score += 40 * this.level;
        break;
      case 2:
        this.score += 100 * this.level;
        break;
      case 3:
        this.score += 300 * this.level;
        break;
      case 4:
        this.score += 1200 * this.level;
        break;
    }
    this.level = Math.min(Math.floor(this.clearedRows / 10) + 1, 10);
  }
}
