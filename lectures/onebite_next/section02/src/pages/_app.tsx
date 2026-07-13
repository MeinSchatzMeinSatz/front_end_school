import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    router.push("/test");
    /**
     * 이 외에도 replace, back 같은 메서드도 있다.
     */
  };

  useEffect(() => {
    router.prefetch("/test");
  }, []);

  return (
    <>
      <Link href={"/"}>index</Link>
      &nbsp;
      <Link href={"/search"} prefetch={false}>
        search
      </Link>
      &nbsp;
      <Link href={"/book/1"}>book/1</Link>
      <div>
        <button onClick={onClickButton}>/test 페이지로 이동</button>
      </div>
      <Component {...pageProps} />
    </>
  );
}
