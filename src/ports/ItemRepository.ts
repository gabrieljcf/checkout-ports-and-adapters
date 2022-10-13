import Item from "../core/Item";

export default interface ItemRepository {
  getItem(idItem: number): Promise<Item>;
}
