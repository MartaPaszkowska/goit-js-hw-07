'use strict';

const categories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categories.length}`);

for (const category of categories) {
  const headOfCategory = category.querySelector('h2');
  console.log(`Category: ${headOfCategory.textContent}`);
  const elementsOfCategory = category.querySelector('ul');
  console.log(`Elements: ${elementsOfCategory.children.length}`);
}
