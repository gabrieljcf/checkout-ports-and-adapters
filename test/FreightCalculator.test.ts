import Dimension from "../src/core/Dimension";
import FreightCalculator from "../src/core/FreightCalculator";
import Item from "../src/core/Item";

test("Should be able to calculate a freight", () => {
  const dimension = new Dimension(100, 30, 10, 3);
  const item = new Item(1, "Guitarra", 1000, dimension);
  const freight = FreightCalculator.calculate(item);
  expect(freight).toBe(30);
});

test("Should be able to calculate the freight with minimum price", () => {
  const dimension = new Dimension(10, 10, 10, 0.9);
  const item = new Item(3, "Cabo", 30, dimension);
  const freight = FreightCalculator.calculate(item);
  expect(freight).toBe(10);
});
