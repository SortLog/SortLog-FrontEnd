import { api } from "@/utils/axios";

export const getUser = (id: any) => api(`/api/users/${id}`, { method: "GET" });

export const putUser = (id: any, email: any, name: any, provider: any, photoUrl: any, contactType: any, phone: any) =>
  api(`/api/users/${id}`, {
    method: "PUT",
    data: { email, name, provider, photoUrl, contactType, phone },
  });
