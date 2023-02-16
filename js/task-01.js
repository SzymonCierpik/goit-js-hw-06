const numerOfCategory = document.querySelectorAll("li.item");
console.log("Numer of categories:", numerOfCategory.length);

const firstNameCategory = document.querySelector("h2");
console.log("Category:", firstNameCategory.textContent);

const elementsName = document.querySelectorAll("li.item");
console.log("Elements:", elementsName[0].children[1].children.length);
