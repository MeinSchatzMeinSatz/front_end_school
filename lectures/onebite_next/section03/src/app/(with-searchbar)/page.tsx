import style from "./page.module.css";
import AllBooks from "@/components/all-books";
import RecoBooks from "@/components/reco-books";

export const dynamic = "force-dynamic";
// 특정 페이지의 유형을 강제로 static, dynamic 페이지로 설정
// 1. auto: 기본값으로, 아무것도 강제하지 않음
// 2. force-dynamic: 페이지를 강제로 Dynamic 페이지로 설정
// 3. force-static: 페이지를 강제로 Static 페이지로 설정
// 4. error: 페이지를 강제로 Static 페이지 설정(설정하면 안되는 이유가 있다면 error 표시)

export default async function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  );
}
