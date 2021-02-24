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
courses.forEach((value, index) => {
  // console.log(index, value);
});

var isFree = courses.every((array, index) => {
  // console.log(index);
  return array.coin !== 0;
});

var isSome = courses.some((array, index) => {
  // console.log(index);
  return array.coin !== 0;
});

var newCourses = courses.map((value) => {
  return {
    id: value.id,
    name: `Khóa học ${value.name}`,
    coin: value.coin,
    price: `Giá tiền ${value.coin}`,
  };
});
// x là giá trị Total. Còn y là giá trị kế tiếp
var totalCoin = courses.reduce((x, y) => {
  return x + y.coin;
}, 0);

// Flat - "Làm phẳng mảng"
var deptArray = [1, [2, 3], 4, 5, [6, 7, 8], 9];
var flatArray = deptArray.reduce((flat, deptItem) => {
  return flat.concat(deptItem);
}, []);
// Lấy các khóa học
var topics = [
  {
    topic: "Front-end",
    courses: [
      {
        id: 1,
        title: "Html, Css",
      },
      {
        id: 2,
        title: "JavaScript",
      },
    ],
  },

  {
    topic: "Back-end",
    courses: [
      {
        id: 1,
        title: "ReactJS",
      },
      {
        id: 2,
        title: "Angular",
      },
    ],
  },
];
// Lấy Title
var topicArray = topics.reduce((flat, item) => {
  return flat.concat(item.courses);
}, []);

var htmls = topicArray.map((value) => {
  return `
  <div>
  <h2>topic: ${value.title} </h2>
  <p> ID: ${value.id}</p>
  </div>
  `;
});

// includes method tồn tại trong Array và String
/**
 includes giống như search với 2 tham số => boolean:
 1 giá trị cần tìm
 2 vị trí bắt đầu 
 */

// Callback
// forEach, reduce, find, filter:

var arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var html = arrayTest.filter((element) => {
//   return element % 2;
// });

Array.prototype.filter2 = function (callback) {
  var output = [];
  for (var i in this) {
    var result = callback(this[i], i);
    if (result) {
      output.push(this[i]);
    }
  }
  return output;
};

var html = arrayTest.filter2((element) => {
  return element % 3 == 0;
});
console.log(html);
