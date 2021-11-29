const tail = require('../tail');
const assert = require('chai').assert;


//test code
const result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail test", () => {

  it("returns 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(result.length, 2);
  });

  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(result[0], "Lighthouse");
  });

  it("returns 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(result[1], "Labs");
  });

});
