import BookItem from "./book-item";
import { getBooks } from "@/lib/api";

export default async function RecoBooks() {
  const recoBooks = await getBooks("/book/random");

  return (
    <div>
      {recoBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
