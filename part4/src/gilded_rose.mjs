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

  updateQuality() {
    for (const item of this.items) {
      if (item.name === "Sulfuras, Hand of Ragnaros") {
        continue;
      }
      if (item.name === "Aged Brie") {
        if (item.quality < 50) {
          item.quality++;
        }
        item.sellIn--;
        if (item.sellIn < 0) {
          if (item.quality < 50) {
            item.quality++;
          }
        }
        continue;
      }
      if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        if (item.quality < 50) {
          item.quality++;
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality++;
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality++;
            }
          }
        }
        item.sellIn = item.sellIn - 1;
        if (item.sellIn < 0) {
          item.quality = 0;
        }
        continue;
      }
      if (item.quality > 0) {
        item.quality--;
      }
      item.sellIn--;
      if (item.sellIn < 0) {
        if (item.quality > 0) {
          item.quality--;
        }
      }
    }

    return this.items;
  }
}
