// const numerOfCategory = document.querySelectorAll("li.item");
// console.log("Numer of categories: ", numerOfCategory.length);

// const firstNameCategory = document.querySelector("h2");
// console.log("Category: ", firstNameCategory.textContent);
// Zadanie 1
// W HTML znajduje się lista kategorii ul#categories.

// <ul id="categories">
//   <li class="item">
//     <h2>Animals</h2>
//     <ul>
//       <li>Cat</li>
//       <li>Hamster</li>
//       <li>Horse</li>
//       <li>Parrot</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Products</h2>
//     <ul>
//       <li>Bread</li>
//       <li>Prasley</li>
//       <li>Cheese</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Technologies</h2>
//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//       <li>Node.js</li>
//     </ul>
//   </li>
// </ul>

// Napisz skrypt, który:

// Policzy i wprowadzi do wiersza poleceń liczbę kategorii w ul#categories, czyli elementy li.item.
// Dla każdego elementu li.item na liście ul#categories, znajdzie i wprowadzi do wiersza poleceń tekst nagłówka elementu (tag <h2>) i liczbę elementów w kategorii (wszystkich <li>).
// W konsekwencji, w wierszu poleceń znajdą się takie komunikaty.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const oneElementsName = document.querySelectorAll("li.item");
console.log("Elements: ", oneElementsName[0].children[1].children.length);

const secondNameCategory = document.querySelectorAll("h2");
console.log("Category: ", secondNameCategory[1].textContent);

const twoElementsName = document.querySelectorAll("li.item");
console.log("Elements: ", oneElementsName[1].children[1].children.length);

const thirdNameCategory = document.querySelectorAll("h2");
console.log("Category: ", thirdNameCategory[2].textContent);

const threeElementsName = document.querySelectorAll("li.item");
console.log("Elements: ", oneElementsName[1].children[1].children.length);
