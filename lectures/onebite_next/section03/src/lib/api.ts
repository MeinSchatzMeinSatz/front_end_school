import { BookData } from "@/types";

export async function getBooks(path: string): Promise<BookData[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}${path}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${path}`);
  }
  return response.json();
}

export async function getBook<T>(path: string): Promise<T> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}${path}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch book: ${path}`);
  }
  return response.json();
}
