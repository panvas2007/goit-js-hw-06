const liElements = document.querySelectorAll(".item");
console.log("Number of categories:", liElements.length);

const countElementsForEachCategory = liElements.forEach((liElement) => {
  const titleText = liElement.firstElementChild.textContent;
  //   console.log(titleText);
  const elementsOfCategory = liElement.lastElementChild.children;
  //   console.log(elementsOfCategory);
  console.log(
    `Category: ${titleText} \n Elements: ${elementsOfCategory.length}`
  );
});
