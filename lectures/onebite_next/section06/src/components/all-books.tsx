import BookItem from "./book-item";
import { getBooks } from "@/lib/api";

export default async function AllBooks() {
  const allBooks = await getBooks("/book");

  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
