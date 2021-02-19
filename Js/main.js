var courses = [
  {
    id: 1,
    name: "PHP",
    coin: 100,
  },
  {
    id: 2,
    name: "JavaScript",
    coin: 100,
  },
  {
    id: 3,
    name: "React",
    coin: 0,
  },
  {
    id: 4,
    name: "Java",
    coin: 0,
  },
  {
    id: 5,
    name: "C++",
    coin: 100,
  },
];
courses.forEach((valuse, index) => {
  console.log(index, valuse);
});

var isFree = courses.every((array, index) => {
  console.log(index);
  return array.coin !== 0;
});

var isSome = courses.some((array, index) => {
  console.log(index);
  return array.coin !== 0;
});

console.log(isFree);
