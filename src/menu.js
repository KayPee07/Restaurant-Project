function renderMenu() {
  const menuContent = document.createElement("div");
  const menuTitle = document.createElement("h2");
  menuTitle.textContent = "Our Menu";
  menuContent.appendChild(menuTitle);

  const beverages = document.createElement("h3");
  beverages.textContent = "Coffee:";
  menuContent.appendChild(beverages);

  const drinkItem = document.createElement("div");
  menuContent.appendChild(drinkItem);
  const drinkTitle = document.createElement("h4");
  drinkTitle.textContent = "Espresso";
  drinkItem.appendChild(drinkTitle);
  const drinkPrice = document.createElement("p");
  drinkPrice.textContent = "150/-Rs.";
  drinkItem.appendChild(drinkPrice);

  const drinkItem2 = document.createElement("div");
  menuContent.appendChild(drinkItem2);
  const drinkTitle2 = document.createElement("h4");
  drinkTitle2.textContent = "Latte";
  drinkItem2.appendChild(drinkTitle2);
  const drinkPrice2 = document.createElement("p");
  drinkPrice2.textContent = "140/-Rs.";
  drinkItem2.appendChild(drinkPrice2);

  const drinkItem3 = document.createElement("div");
  menuContent.appendChild(drinkItem3);
  const drinkTitle3 = document.createElement("h4");
  drinkTitle3.textContent = "Simple coffee";
  drinkItem3.appendChild(drinkTitle3);
  const drinkPrice3 = document.createElement("p");
  drinkPrice3.textContent = "60/-Rs.";
  drinkItem3.appendChild(drinkPrice3);

  const drinkItem4 = document.createElement("div");
  menuContent.appendChild(drinkItem4);
  const drinkTitle4 = document.createElement("h4");
  drinkTitle4.textContent = "Cappuccino";
  drinkItem4.appendChild(drinkTitle4);
  const drinkPrice4 = document.createElement("p");
  drinkPrice4.textContent = "250/-Rs.";
  drinkItem4.appendChild(drinkPrice4);

  const food = document.createElement("h3");
  food.textContent = "BreakFast";
  menuContent.appendChild(food);

  const foodItem = document.createElement("div");
  menuContent.appendChild(foodItem);
  const foodTitle = document.createElement("h4");
  foodTitle.textContent = "Aloo Paratha";
  foodItem.appendChild(foodTitle);
  const foodPrice = document.createElement("p");
  foodPrice.textContent = "110/-Rs.";
  foodItem.appendChild(foodPrice);

  const foodItem2 = document.createElement("div");
  menuContent.appendChild(foodItem2);
  const foodTitle2 = document.createElement("h4");
  foodTitle2.textContent = "Sandwich";
  foodItem2.appendChild(foodTitle2);
  const foodPrice2 = document.createElement("p");
  foodPrice2.textContent = "99/-Rs.";
  foodItem2.appendChild(foodPrice2);

  const foodItem3 = document.createElement("div");
  menuContent.appendChild(foodItem3);
  const foodTitle3 = document.createElement("h4");
  foodTitle3.textContent = "Rice with Curry";
  foodItem3.appendChild(foodTitle3);
  const foodPrice3 = document.createElement("p");
  foodPrice3.textContent = "79/-Rs.";
  foodItem3.appendChild(foodPrice3);

  menuContent.classList.add("container");
  return menuContent;
}

export { renderMenu };
