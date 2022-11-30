import { api } from "@/utils/axios";

export const getHistories = () => api(`/history/list`, { method: "GET" });

export const getHistory = (id: any) => api(`/history/${id}`, { method: "GET" });

export const postHistory = (history: any) =>
  api(`/history/add`, {
    method: "POST",
    data: history,
  });

export const putHistory = (id: any, history: any) =>
  api(`/history/${id}`, {
    method: "PUT",
    data: history,
  });

export const deleteHistory = (id: any) =>
  api(`/history/${id}`, {
    method: "DELETE",
  });
