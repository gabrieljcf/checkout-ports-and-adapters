import ItemRepositoryInMemory from "../src/adapters/db-in-memory/ItemRepositoryInMemory";
import OrderService from "../src/services/OrderService";

test("Should be able to simulate an order", async () => {
  const input = {
    cpf: "886.634.854-68",
    orderItems: [
      { idItem: 1, quantity: 1 },
      { idItem: 2, quantity: 1 },
      { idItem: 3, quantity: 3 },
    ],
  };
  const itemRepositoryInMemory = new ItemRepositoryInMemory();
  const service = new OrderService(itemRepositoryInMemory);
  const output = await service.preview(input);
  expect(output.total).toBe(6350);
});
