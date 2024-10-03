import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "u7vaui5g",
  dataset: "production",
  apiVersion: "2023-10-01",
  // apiVersion: "2024-09-23",
  useCdn: false,
});
