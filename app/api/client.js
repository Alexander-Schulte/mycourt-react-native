import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://5.147.113.80:9000/api",
});

export default apiClient;
