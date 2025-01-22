const PI = 3.14;
let area = 0;
area = circleArea(3);
console.log(area);
area = circleArea(5);
console.log(area);

function circleArea(radius) {
  return PI * radius * radius;
}