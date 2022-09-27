"use strict"; // Строгий режим

console.log("JavaScript is awesome".length);

let username;
console.log(typeof username);

// const message = "JavaScript is awesome!";
// alert(message);

// Просим клиента подтвердить бронь на отель
// и сохраняем в переменную результат работы confirm
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
  // Change code above this line
  return message;
}
let result = makeOrderMessage(2, 100, 50);
console.log(result); // 30
// Change code above this line
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

//
// Change code below this line
apartment.area = 60;
apartment.rooms = 3;
apartment.location = { country: "Jamaica", city: "Kingston" };
