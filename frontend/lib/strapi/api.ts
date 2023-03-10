import qs from "querystring";
import { SetStateAction } from "react";

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 * example:
 * const query = qs.stringify(
  {
    populate: '*',
  },
  {
    encodeValuesOnly: true, // prettify URL
  }
  );

  await request(`/api/articles?${query}`);
  see https://docs.strapi.io/dev-docs/api/rest/populate-select
  */
export async function fetchAPI(
  path: string, 
  urlParamsObject = {}, 
  options = {}
) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data;
}

export async function clientSideFetchAPI(
  path: string, 
  urlParamsObject = {}, 
  options = {},
  setStateForData: SetStateAction<any>,
  setLoading?: SetStateAction<any>,
) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  // Trigger API call
  await fetch(requestUrl, mergedOptions)
    .then(response => response.json()
    .then(data => setStateForData(data))
  )

  // setLoading && setTimeout(() => {
  setLoading && setLoading(false);
  // }, 250); 
}