import { http, nextapi } from "@/utils/axios";

export const hello = () => nextapi(`/api/hello`, { method: "GET" });

export const getUser1 = () => http(`/user/1`, { method: "GET" });
