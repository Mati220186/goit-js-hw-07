const categories = document.querySelectorAll("ul#categories li.item");
console.log(categories);
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const header = category.querySelector("h2").textContent;

  const itemsCount = category.querySelectorAll("ul li").length;

  console.log(`Category: ${header}`);
  console.log(`Elements: ${itemsCount}`);
});
