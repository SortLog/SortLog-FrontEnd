import { api } from "@/utils/axios";

export const listItems = () => api(`/items/list`, { method: "GET" });

export const getItem = (id: string) => api(`/items/${id}`, { method: "GET" });

export const postItem = (item: any) =>
  api(`/items/add`, {
    method: "POST",
    data: item,
  });

export const putItem = (id: string, item: any) =>
  api(`/items/${id}`, {
    method: "PUT",
    data: item,
  });

export const deleteItem = (id: string) =>
  api(`/items/${id}`, {
    method: "DELETE",
  });
