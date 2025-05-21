import { $fetch } from "ofetch";

export const contentstack_api = $fetch.create({
  baseURL: "https://cdn.contentstack.io/v3",
  headers: {
    api_key: process.env.CONTENTSTACK_MAIN_API_KEY ?? "",
    access_token: process.env.CONTENTSTACK_MAIN_ACCESS_TOKEN ?? "",
  },
});
