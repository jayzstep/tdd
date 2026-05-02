export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  update() {
    if (this.quality > 0) {
      this.quality--;
    }
    this.sellIn--;
    if (this.sellIn < 0 && this.quality > 0) {
      this.quality--;
    }
  }
}

export class AgedBrie {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  update() {
    if (this.quality < 50) {
      this.quality++;
    }
    this.sellIn--;
    if (this.sellIn < 0 && this.quality < 50) {
      this.quality++;
    }
  }
}

export class BackstagePass {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  update() {
    if (this.quality < 50) {
      this.quality++;
      if (this.quality < 50 && this.sellIn < 11) {
        this.quality++;
        if (this.sellIn < 6) {
          this.quality++;
        }
      }
    }
    this.sellIn--;
    if (this.sellIn < 0) {
      this.quality = 0;
    }
  }
}

export class Sulfuras {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  update() {
    return;
  }
}
export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name === "Sulfuras, Hand of Ragnaros") {
        item.update();
        continue;
      }
      if (item.name === "Aged Brie") {
        item.update();
        continue;
      }
      if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        item.update();
        continue;
      }
      item.update();
    }

    return this.items;
  }
}
