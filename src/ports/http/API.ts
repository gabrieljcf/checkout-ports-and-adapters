import express from "express";
import ItemRepositoryDatabase from "../../adapters/postgre-sql/ItemRepositoryDatabase";
import OrderService from "../../services/OrderService";

const app = express();
app.use(express.json());

app.post("/orderPreview", async (request, response) => {
  const { cpf, orderItems } = request.body;
  const itemRepository = new ItemRepositoryDatabase()
    const service = new OrderService(itemRepository);
  const output = await service.preview({ cpf, orderItems });
  response.json(output);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
