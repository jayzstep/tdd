import { describe, test } from "vitest";
import { expect } from "chai";
import { Item, Shop, AgedBrie, BackstagePass, Sulfuras } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(0);
  });
  test("foo", () => {
    const gildedRose = new Shop([new Item("foo", 3, 3)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(2);
    expect(items[0].quality).to.equal(2);
  });
  test("foo", () => {
    const gildedRose = new Shop([new Item("foo", -10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(-11);
    expect(items[0].quality).to.equal(8);
  });
  test("foo", () => {
    const gildedRose = new Shop([new Item("foo", 1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(0);
    expect(items[0].quality).to.equal(9);
  });
  test("foo", () => {
    const gildedRose = new Shop([new Item("foo", -2, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(-3);
    expect(items[0].quality).to.equal(8);
  });
  test("foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(0);
  });
  test("Aged Brie", () => {
    const gildedRose = new Shop([new AgedBrie("Aged Brie", 1, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(0);
    expect(items[0].quality).to.equal(6);
  });
  test("Aged Brie", () => {
    const gildedRose = new Shop([new AgedBrie("Aged Brie", -1, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(7);
  });
  test("Aged Brie", () => {
    const gildedRose = new Shop([new AgedBrie("Aged Brie", -1, 51)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(51);
  });
  test("Aged Brie", () => {
    const gildedRose = new Shop([new AgedBrie("Aged Brie", -1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(-2);
    expect(items[0].quality).to.equal(50);
  });
  test("Aged Brie", () => {
    const gildedRose = new Shop([new AgedBrie("Aged Brie", 11, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
    expect(items[0].sellIn).to.equal(10);
    expect(items[0].quality).to.equal(50);
  });
  test("Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new Shop([new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(-1);
    expect(items[0].quality).to.equal(0);
  });
  test("Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new Shop([new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(0);
    expect(items[0].quality).to.equal(13);
  });
  test("Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new Shop([new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 20, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(19);
    expect(items[0].quality).to.equal(50);
  });
  test("Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new Shop([new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 11, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(10);
    expect(items[0].quality).to.equal(1);
  });
  test("Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new Shop([new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 10, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(50);
  });
  test("Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new Shop([new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 6, 45)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(5);
    expect(items[0].quality).to.equal(47);
  });
  test("Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new Shop([new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 5, 45)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(4);
    expect(items[0].quality).to.equal(48);
  });
  test("Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new Shop([new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 5, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(4);
    expect(items[0].quality).to.equal(50);
  });
  test("Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new Shop([new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 8, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(7);
    expect(items[0].quality).to.equal(3);
  });
  test("Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new Shop([new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 12, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).to.equal(11);
    expect(items[0].quality).to.equal(1);
  });
  test("Sulfuras, Hand of Ragnaros", () => {
    const gildedRose = new Shop([new Sulfuras("Sulfuras, Hand of Ragnaros", 12, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).to.equal(12);
    expect(items[0].quality).to.equal(0);
  });
  test("Sulfuras, Hand of Ragnaros", () => {
    const gildedRose = new Shop([new Sulfuras("Sulfuras, Hand of Ragnaros", 5, 55)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).to.equal(5);
    expect(items[0].quality).to.equal(55);
  });
  test("Sulfuras, Hand of Ragnaros", () => {
    const gildedRose = new Shop([new Sulfuras("Sulfuras, Hand of Ragnaros", -3, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).to.equal(-3);
    expect(items[0].quality).to.equal(10);
  });

  test("Conjured degrade 2x fast", () => {
    const gildedRose = new Shop([new Conjured("Conjured", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Conjured");
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(8);
  });
});
