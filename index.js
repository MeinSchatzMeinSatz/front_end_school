// 비동기 작업 처리하기1. 콜백 함수

function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 1500);
}

add(1, 2, (value) => {
  console.log(value);
});

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "Teokbokki";
    callback(food);
  }, 1500);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, () => {
    console.log();
  });
});

//
