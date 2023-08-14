// ## Array Methods #9

// #### Create Students Array

// 1. setup students array with 5 students
//    {
//    id: 1,
//    name: 'yash',
//    score: 80,
//    favoriteSubject: 'math',
//    },

const students = [
  {
    id: 1,
    name: 'yash',
    score: 80,
    favoriteSubject: 'math',
  },
  {
    id: 2,
    name: 'sumit',
    score: 99,
    favoriteSubject: 'history',
  },
  {
    id: 3,
    name: 'arun',
    score: 85,
    favoriteSubject: 'math',
  },
  {
    id: 4,
    name: 'riya',
    score: 34,
    favoriteSubject: 'art',
  },
  {
    id: 5,
    name: 'adi',
    score: 74,
    favoriteSubject: 'math',
  },
];

// function sayName(name) {
//   console.log(name);
// }

// #### updatedStudents

// 1. add role:'student' property to each object
//    using MAP method
// 2. assign to 'updatedStudents' variable and log

const updatedStudents = students.map(function (student) {
  student.role = 'student';
  return student;
});

// #### highScores

// 1. filter array and return only scores >= 80
// 2. assign to 'highScores' variable and log

const highScores = students.filter(function (student) {
  return student.score >= 80;
});


// #### specificId

// 1. find specific id in array
// 2. assign to 'specificId' variable and log

const specificId = students.find(function (stud) {
  return stud.id === 6;
});


// #### averageScore

// 1. sum up all student.score values with reduce
// 2. divide by the length of the students array
// 3. assign to 'averageScore' and log

const averageScore =
  students.reduce(function (scoresTotal, student) {
    // console.log(student);
    // console.log(scoresTotal);
    return scoresTotal + student.score;
  }, 0) / students.length;

// console.log(averageScore);

const subject = 'art';

const total = {};
total[subject] = 'some value';
// console.log(total);


// #### survey

// 1. list favorite subjects with reduce
//    {
//    english: 1
//    history: 1
//    math: 3
//    }
// 2. assign to survey and log

const survey = students.reduce(function (survey, student) {
  // console.log(student.favoriteSubject);
  const favSubject = student.favoriteSubject;
  if (survey[favSubject]) {
    survey[favSubject] = survey[favSubject] + 1;
  } else {
    survey[favSubject] = 1;
  }
  return survey;
}, {});

console.log(survey);