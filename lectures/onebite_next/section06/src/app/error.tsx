"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  const router = useRouter();

  return (
    <div>
      <h3>오류가 발생했습니다(error 페이지)</h3>
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh(); // 페이지를 새로 고침하지 않고도 Next.js 서버에게 서버 컴포넌트를 다시 실행하고 그 결과를 응답하도록 요청할 수 있다.
            reset(); // 에러 상태 초기화, 컴포넌트를 페이지에 다시 렌더링
          });
        }}
      >
        다시 시도
      </button>
    </div>
  );
}
