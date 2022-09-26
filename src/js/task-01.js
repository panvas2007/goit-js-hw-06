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
const LiEl = document.querySelector("#categories");
console.log(LiEl);
const firstNavItem = LiEl.children;
console.log(firstNavItem[2]);
const titleList = document.createElement("h1");
titleList.classList.add("element");
titleList.textContent = "good element";
console.log(titleList);
document.body.append(titleList);
const imEl = document.createElement("img");
imEl.src =
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fplanbphoto.com%2Fwp-content%2Fuploads%2FMyru-spokoju-768x768.jpg&imgrefurl=https%3A%2F%2Fplanbphoto.com%2Fua%2Fden-narodzhennia%2F&tbnid=pdQr7xiptu4hfM&vet=12ahUKEwiziqbO26_6AhVs-SoKHY-4Cm0QMygBegUIARCiAQ..i&docid=fd0sd6NFy4A4bM&w=768&h=768&itg=1&q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8%20%D0%B7%20%D0%B4%D0%BD%D0%B5%D0%BC%20%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F&client=opera&ved=2ahUKEwiziqbO26_6AhVs-SoKHY-4Cm0QMygBegUIARCiAQ";
document.body.append(imEl);
