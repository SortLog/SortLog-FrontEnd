import { api } from "@/utils/axios";

export const getUser = (id: any) => api(`/users/${id}`, { method: "GET" });

export const putUser = (id: any, user:any) =>
  api(`/users/${id}`, {
    method: "PUT",
    data: user,
  });
