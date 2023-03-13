import axios from "axios";

export const fetchApi = async (api: string, slug?: string): Promise<any> => {
  const env: NodeJS.ProcessEnv = process.env;
  try {
    const response = await axios.get(`${env.NODE_ENV === "development" ? (env.NEXT_PUBLIC_DEVHOST) : (env.NEXT_PUBLIC_HOSTNAME)}api/${api}/${slug ? slug : ""}`);
    return await response.data;
  } catch(error) {
    console.error(error);
  }
}