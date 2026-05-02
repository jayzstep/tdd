import { describe, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });
  test("foo", () => {
    const gildedRose = new Shop([new Item("foo", -10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });
  test("Aged Brie", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(7);
  });
  test("Aged Brie", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 51)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(51);
  });
  test("Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(0);
  });
  test("Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 8, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(7);
    expect(items[0].quality).to.equal(3);
  });
  test("Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 12, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(11);
    expect(items[0].quality).to.equal(1);
  });
});
