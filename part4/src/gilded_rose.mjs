export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
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
      this.updateEverythingElse(item);
    }

    return this.items;
  }

  updateBackstagePass(item) {
    if (item.quality < 50) {
      item.quality++;
      if (item.quality < 50 && item.sellIn < 11) {
        item.quality++;
        if (item.sellIn < 6) {
          item.quality++;
        }
      }
    }
    item.sellIn--;
    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }

  updateEverythingElse(item) {
    if (item.quality > 0) {
      item.quality--;
    }
    item.sellIn--;
    if (item.sellIn < 0 && item.quality > 0) {
      item.quality--;
    }
  }
}
