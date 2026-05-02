export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateAgedBrie(item) {
    if (item.quality < 50) {
      item.quality++;
    }
    item.sellIn--;
    if (item.sellIn < 0 && item.quality < 50) {
      item.quality++;
    }
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

  updateQuality() {
    for (const item of this.items) {
      if (item.name === "Sulfuras, Hand of Ragnaros") {
        continue;
      }
      if (item.name === "Aged Brie") {
        this.updateAgedBrie(item);
        continue;
      }
      if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        this.updateBackstagePass(item);
        continue;
      }
      this.updateEverythingElse(item);
    }

    return this.items;
  }
}
