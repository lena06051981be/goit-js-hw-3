const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment["rating"];
console.log(aptRating);
const aptDescr = apartment["descr"];
console.log(aptDescr);
const aptPrice = apartment["price"];
console.log(aptPrice);
const aptTags = apartment["tags"];
console.table(aptTags);
// Change code above this line

//
const students = [
  { name: "Манго", courses: ["математика", "фізика"] },
  { name: "Полі", courses: ["інформатика", "математика"] },
  { name: "Ківі", courses: ["фізика", "біологія"] },
];

students.map((student) => student.courses);
// [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]
console.log(students.map((student) => student.courses));
students.flatMap((student) => student.courses);
// ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
console.log(students.flatMap((student) => student.courses));
