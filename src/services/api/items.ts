import { api } from "@/utils/axios";

export const listItems = () => api(`/items/list`, { method: "GET" });

export const getItem = (id: any) => api(`/items/${id}`, { method: "GET" });

export const postItem = (
  sku: any,
  name: any,
  price: any,
  quantity: any,
  size: any,
  tags: any,
  category: any,
  image: any
) =>
  api(`/items/add`, {
    method: "POST",
    data: { sku, name, price, quantity, size, tags, category, image },
  });

export const putItem = (
  id: any,
  sku: any,
  name: any,
  price: any,
  quantity: any,
  size: any,
  tags: any,
  category: any,
  image: any
) =>
  api(`/items/${id}`, {
    method: "PUT",
    data: { sku, name, price, quantity, size, tags, category, image },
  });

export const deleteItem = (id: any) =>
  api(`/items/${id}`, {
    method: "DELETE",
  });
