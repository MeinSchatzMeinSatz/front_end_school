import { BookData } from "@/types";
import { cache } from "react";

export const getBooks = cache(async (path: string): Promise<BookData[]> => {
  console.log("getBooks 호출:", path);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}${path}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${path}`);
  }
  return response.json();
});

export async function getBook<T>(path: string): Promise<T> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}${path}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch book: ${path}`);
  }
  return response.json();
}
