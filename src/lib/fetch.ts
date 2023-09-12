import { BASE_API_URL } from "@/configs";

async function fetchContent({ url, options }: { url: string; options?: any }) {
  const response = await fetch(BASE_API_URL + url, {
    cache: "default",
    ...options,
  });
  return await response.json();
}

export default fetchContent;
