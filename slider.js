const left = document.querySelector('#slider-arrow-left'); // выбираем левую кнопку
const right = document.querySelector('#slider-arrow-right'); // выбираем правую кнопку
const items = document.querySelector('#works-slider__items'); // выбираем родительский блок с картинками
const itemsDesc = document.querySelector('#works-slider__left-items');
const widthItems = parseInt(getComputedStyle(items).width); // значение ширины для адаптива

right.addEventListener("click", function(e) {
  e.preventDefault();
  let currentRight = parseInt(getComputedStyle(items).right);
  if (!currentRight) { 
    currentRight = 0;
  }

  if (currentRight < widthItems*3) {
    items.style.right = currentRight + widthItems + "px";
  } else {
    items.style.right = 0 + "px";
  }

  // слайдер на левую часть
  let currentRightDesc = parseInt(getComputedStyle(itemsDesc).right);
  if (!currentRightDesc) {
    currentRightDesc = 0;
  }
  if (currentRightDesc < 1050) {
    itemsDesc.style.right = currentRightDesc + 350 + "px";
  } else {
    itemsDesc.style.right = 0 + "px";
  }
});

left.addEventListener("click", function(e) {
  e.preventDefault();
  let currentRight = parseInt(getComputedStyle(items).right);
  if (!currentRight) {
    currentRight = 0;
  }

  if (currentRight > 0) {
    items.style.right = currentRight - widthItems + "px";
  } else {
    items.style.right = widthItems*3 + "px";
  }

  // слайдер на левую часть
  let currentRightDesc = parseInt(getComputedStyle(itemsDesc).right);
  if (!currentRightDesc) {
    currentRightDesc = 0;
  }
  if (currentRightDesc > 0) {
    itemsDesc.style.right = currentRightDesc - 350 + "px";
  } else {
    itemsDesc.style.right = 1050 + "px";
  }
});