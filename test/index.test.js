const translate = require("../src");

describe("translateToWookiee", () => {
  test("Translate a simple string all lowercase", () => {
    const translated = translate("hello world!");
    expect(translated).toEqual("acwoananoo ohoorcanwa!");
  });

  test("Translate a simple string with mixed case", () => {
    const translated = translate("Hello World!");
    expect(translated).toEqual("Acwoananoo Ohoorcanwa!");
  });

  test("Translate a string with escaped chars", () => {
    const translated = translate("hello \n\t world!");
    expect(translated).toEqual("acwoananoo \n\t ohoorcanwa!");
  });
});
