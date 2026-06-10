// (1) 라이브러리를 다운로드 받으면,,,

/**
 * 1. package.json에 dependency에 해당 라이브러리에 추가된다.
 * 2. node_moudules 폴더에 해당 패키지와 관련된 파일들이 설치된다.
 * 3. package-lock.json에는 해당 파일에 대한 정보가 더욱 자세하게 실려있다.
 */

// (2) randomcolor 라이브러리 사용하기
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

// 이처럼 복잡한 기능을 가진 함수들을 라이브러리를 통해 사용할 수 있다.
