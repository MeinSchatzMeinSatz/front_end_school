// 비동기로 진행되는 작업을 함수 외부에서 이용하기 위해 콜백 함수를 사용.

// function add(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum);
//   }, 1500);
// }

// add(1, 2, (value) => {
//   console.log(value);
// });

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 1500);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooledFood = `식은 ${food}`;
    callback(cooledFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooledFood) => {
    console.log(cooledFood);

    freezeFood(cooledFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});

// 작업이 늘어날수록
// 길어지는 인덴트
// => 콜백지옥이라고 한다.
