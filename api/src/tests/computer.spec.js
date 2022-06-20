const { getMovement } = require("./../services/computer");

it("Computer :: Next move computing", () => {
  const positions = [0, 1, null, 0, 1, null, null, null, null];

  expect(getMovement(positions)).toEqual(8);
});
