import { api, nextapi } from "@/utils/axios";

export const hello = () => nextapi(`/api/hello`, { method: "GET" });

export const getUser1 = () => api(`/user/1`, { method: "GET" });
