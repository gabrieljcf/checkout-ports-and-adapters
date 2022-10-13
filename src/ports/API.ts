import express from "express";
import pgp from "pg-promise";
import Dimension from "../core/Dimension";
import Item from "../core/Item";
import Order from "../core/Order";

const app = express();
app.use(express.json());

const connection = pgp()("postgres://gabriel:123456@localhost:5432/app");

app.post("/orderPreview", async (request, response) => {
  const { cpf, orderItems } = request.body;
  const order = new Order(cpf);
  for (const orderItem of orderItems) {
    const [itemData] = await connection.query('SELECT * FROM item where id_item = $1', [orderItem.idItem]);
    const item = new Item(itemData.id_item, itemData.description, parseFloat(itemData.price), new Dimension(itemData.width, itemData.height, itemData.length, itemData.weight));
    order.addItem(item, orderItem.quantity);
  }
  response.json({
    total: order.getTotal(),
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
