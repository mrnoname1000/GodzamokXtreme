const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const source = fs.readFileSync(require('node:path').join(__dirname, '../main.js'), 'utf8').replace(/\r\n/g, '\n');
const helper = source.slice(source.indexOf('// Cookie Clicker 2.058 buys'), source.indexOf('GodzamokXtreme.launch ='));
const calculator = source.slice(source.indexOf('\t// Calculate counts without selling'), source.indexOf('\t//***********************************\n\t//    SELL WARNING PROMPT'));

const buildings = [
  { id: 0, basePrice: 11, amount: 7, free: 0, getSellMultiplier: () => 0.25 },
  { id: 1, basePrice: 31, amount: 5, free: 2, getSellMultiplier: () => 0.5 },
];
for (const building of buildings) {
  building.sell = () => { throw new Error('calculator sold a building'); };
  building.buy = () => { throw new Error('calculator bought a building'); };
}

const game = {
  priceIncrease: 1.15,
  modifyBuildingPrice: (_building, price) => price * 0.93,
  ObjectsById: buildings,
  cookiesPsRaw: 3000,
  cookies: 35,
  buyMode: -1,
  Popup: () => { throw new Error('unexpected popup'); },
};
const config = {
  sellMode: 0,
  buybackEnabled: true,
  buybackType: 1,
  buildings: buildings.map(() => ({ enabled: true, sellPercent: 100, sellUnits: 0 })),
};
const mod = {
  config,
  SAFE_SELL_BUDGET_RATIO: 0.02,
  BuybackType: { FULL_AMOUNT: 1 },
  SellMode: { PERCENT: 0, UNITS: 1 },
  syncAllSellValues(mode) {
    assert.equal(mode, 1);
    for (const building of buildings) {
      const cfg = config.buildings[building.id];
      cfg.sellPercent = Math.floor(100 * cfg.sellUnits / building.amount);
    }
  },
};
const ctx = vm.createContext({ Game: game, GodzamokXtreme: mod, loc: x => x });
vm.runInContext(helper + calculator, ctx);

function simulate(building, count) {
  let amount = building.amount, sale = 0, buy = 0;
  for (let i = 0; i < count; i++) {
    const price = Math.ceil(game.modifyBuildingPrice(building,
      building.basePrice * Math.pow(game.priceIncrease, Math.max(0, amount - building.free))));
    sale += Math.floor(price * building.getSellMultiplier());
    amount--;
  }
  for (let i = 0; i < count; i++) {
    buy += Math.ceil(game.modifyBuildingPrice(building,
      building.basePrice * Math.pow(game.priceIncrease, Math.max(0, amount - building.free))));
    amount++;
  }
  return { sale, buy };
}

for (const building of buildings) {
  for (let count = 0; count <= building.amount; count++) {
    const actual = simulate(building, count);
    const estimate = vm.runInContext(`godzamakTransactionCosts(Game.ObjectsById[${building.id}], ${count})`, ctx);
    assert.equal(estimate.saleProceeds, actual.sale);
    assert.equal(estimate.buybackCost, actual.buy);
    assert.equal(estimate.loss, Math.max(0, actual.buy - actual.sale));
    const losses = vm.runInContext(`godzamakLossesByCount(Game.ObjectsById[${building.id}])`, ctx);
    assert.equal(losses[count], estimate.loss);
  }
}

const before = buildings.map(b => b.amount);
mod.calculateSafeSellUnits();
assert.deepEqual(buildings.map(b => b.amount), before);
assert.equal(game.cookies, 35);
assert.equal(game.buyMode, -1);
assert.equal(config.sellMode, mod.SellMode.UNITS);
const loss = buildings.reduce((sum, b) => sum + simulate(b, config.buildings[b.id].sellUnits).buy
  - simulate(b, config.buildings[b.id].sellUnits).sale, 0);
assert.ok(loss <= 35, `loss ${loss} exceeds cookies on hand`);
assert.ok(config.buildings.some(b => b.sellUnits > 0));
console.log('Safe sell estimates match simulated transactions; calculator is read-only and stays within budget.');
