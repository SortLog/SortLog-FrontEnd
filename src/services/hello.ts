import { http, nextapi } from "@/utils/axios";

export const hello = () => nextapi(`/api/hello`, { method: "GET" });

export const getAllCategories = () => http(`/v1/public/category`, { method: "GET" });
