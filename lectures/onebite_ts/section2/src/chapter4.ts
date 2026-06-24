/**
 * 타입 별칭과 인덱스 시그니처
 */

// 타입 별칭 X
let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "Lee",
};

// 타입 별칭 O
type User = {
  id: number;
  name: string;
  nickName: string;
  birth: string;
  bio: string;
  location: string;
};

// type User = {} // ❗️ 중복된 이름의 타입명은 허용되지 않음

function func() {
  type User = {}; // ✅ 다른 스코프 내에서의 동일한 이름의 타입은 허용
}

let user1: User = {
  id: 1,
  name: "Lee",
  nickName: "Nomad Coder",
  birth: "1995.05.03",
  bio: "안녕하세요. 프론트엔드 개발자 이채준입니다.",
  location: "광진구",
};

let user2: User = {
  id: 1,
  name: "Kim",
  nickName: "Kimchi",
  birth: "1995.05.03",
  bio: "안녕하세요. 프론트엔드 개발자 김치찌개입니다.",
  location: "광진구",
};

// 인덱스 시그니처
// 키와 밸류의 타입을 기준으로 규칙을 설정하는 문법을 인덱스 시그니처라고 한다.
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedStates: "us",
  Japan: "jp",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  States: 840,
  jp: 123,
};

let countryNumberCodes2: CountryNumberCodes = {
  Korea: 410,
}; // 아무런 프로퍼티가 없으면 규칙을 위반할 프로퍼티가 없어서 그냥 통과됨.
