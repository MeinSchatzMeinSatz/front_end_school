/**
 * 사용자 정의 타입가드
 *
 * 참 또는 거짓을 반환하는 함수를 이용해 우리 입맛대로 타입 가드를 만들 수 있도록 도와주는 타입스크립트 문법
 */
function isDog(animal) {
    return animal.isBark !== undefined;
}
function isCat(animal) {
    return animal.isScratch !== undefined;
}
function warn(animal) {
    if (isDog(animal)) {
        animal;
        console.log(animal.isBark);
    }
    else if (animal && "isScratch" in animal) {
        animal;
        console.log(animal.isScratch);
    }
}
export {};
