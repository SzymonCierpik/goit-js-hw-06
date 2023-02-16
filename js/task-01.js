const numerOfCategory = document.querySelectorAll("li.item");
console.log("Numer of categories: ", numerOfCategory.length);

const firstNameCategory = document.querySelector("h2");
console.log("Category: ", firstNameCategory.textContent);

const oneElementsName = document.querySelectorAll("li.item");
console.log("Elements: ", oneElementsName[0].children[1].children.length);

const secondNameCategory = document.querySelectorAll("h2");
console.log("Category: ", secondNameCategory[1].textContent);

const twoElementsName = document.querySelectorAll("li.item");
console.log("Elements: ", oneElementsName[1].children[1].children.length);

const thirdNameCategory = document.querySelectorAll("h2");
console.log("Category: ", thirdNameCategory[2].textContent);

const threeElementsName = document.querySelectorAll("li.item");
console.log("Elements: ", threeElementsName[2].children[1].children.length);
