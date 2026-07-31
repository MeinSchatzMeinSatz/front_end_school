import style from "./page.module.css";
import AllBooks from "@/components/all-books";
import RecoBooks from "@/components/reco-books";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <Suspense fallback={<BookListSkeleton count={3} />}>
          <RecoBooks />
        </Suspense>
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <Suspense fallback={<BookListSkeleton count={5} />}>
          <AllBooks />
        </Suspense>
      </section>
    </div>
  );
}
