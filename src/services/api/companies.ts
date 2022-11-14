import { api } from "@/utils/axios";

export const getAllCompanies = () => api(`/companies/list`, { method: "GET" });

export const getCompany = (id: string) =>
  api(`/companies/${id}`, 
    { method: "GET" });

export const addCompany = (company: any) =>
  api(`/companies/add`, 
    { method: "POST", data: company, });

export const upgradeCompany = (id: string, company: any) =>
  api(`/companies/${id}`, 
    { method: "PUT", data: company, });

export const deleteCompany = (id: string) =>
  api(`/companies/${id}`, 
    { method: "DELETE" });
