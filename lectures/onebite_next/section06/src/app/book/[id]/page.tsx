import { BookData } from "@/types";
import style from "./page.module.css";
import { getBook, getBooks } from "@/lib/api";

// export const dynamicParams = false;

export async function generateStaticParams() {
  const allBooks = await getBooks("/book");

  return allBooks.map((book) => ({ id: String(book.id) }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const { id } = await params;

  const book = await getBook<BookData>(`/book/${id}`);

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
