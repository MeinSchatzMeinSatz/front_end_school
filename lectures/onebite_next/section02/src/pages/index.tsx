// CSS Module
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";
import BookItem from "@/components/BookItem";
import books from "@/mock/book.json";

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <section>
          <h3>지금 추천하는 도서</h3>
          {books.map((book) => (
            <BookItem key={`recommended-${book.id}`} {...book} />
          ))}
        </section>
        <section>
          <h3>등록된 모든 도서</h3>
          {books.map((book) => (
            <BookItem key={`all-${book.id}`} {...book} />
          ))}
        </section>
      </div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
