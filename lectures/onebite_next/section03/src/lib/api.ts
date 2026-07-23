import { BookData } from "@/types";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getBooks = cache(async (path: string): Promise<BookData[]> => {
  console.log("getBooks 호출:", path);

  if (path === "/book/random") {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}${path}`,
      { next: { revalidate: 3 } }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${path}`);
    }

    return response.json();
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}${path}`,
    { cache: "force-cache" }
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
    if (response.status === 404) {
      notFound;
    }
    throw new Error(`Failed to fetch book: ${path}`);
  }
  return response.json();
}
