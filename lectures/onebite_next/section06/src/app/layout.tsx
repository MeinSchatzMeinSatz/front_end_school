import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";
import { BookData } from "@/types";
import { getBooks } from "@/lib/api";

async function Footer() {
  const books: BookData[] = await getBooks("/book");
  const bookCount = books.length;

  return (
    <footer>
      <div>제작 @leechaejun</div>
      <div>{bookCount}개의 도서가 등록되어 있습니다.</div>
    </footer>
  );
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>📚 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
