import { api } from "@/utils/axios";

export const listItems = () => api(`/items/list`, { method: "GET" });

export const getItem = (id: any) => api(`/items/${id}`, { method: "GET" });

export const putItem = (id: any, item:any) =>
  api(`/items/${id}`, {
    method: "PUT",
    data: item,
  });
