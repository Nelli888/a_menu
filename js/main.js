const dishes = document.querySelector("#dishes");

const menu = [
  {
    name: "Sandwich with egg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate cum nesciunt nihil nobis vero in rerum, deserunt    quia architecto exercitationem iste, sapiente reprehenderit mollitia ad rem dicta asperiores. Praesentium!",
    price: "8.99 $",
    image: "./img/3.jpg",
    type: "breakfast",
  },
  {
    name: "Seafood bowl",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate cum nesciunt nihil nobis vero in rerum, deserunt    quia architecto exercitationem iste, sapiente reprehenderit mollitia ad rem dicta asperiores. Praesentium!",
    price: "21 $",
    image: "./img/seafood.jpg",
    type: "dinner",
  },
  {
    name: "Coffee Americano",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate cum nesciunt nihil nobis vero in rerum, deserunt    quia architecto exercitationem iste, sapiente reprehenderit mollitia ad rem dicta asperiores. Praesentium!",
    price: "1.2 $",
    image: "./img/32.jpg",
    type: "breakfast",
  },
  {
    name: "Pancakes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate cum nesciunt nihil nobis vero in rerum, deserunt    quia architecto exercitationem iste, sapiente reprehenderit mollitia ad rem dicta asperiores. Praesentium!",
    price: "10 $",
    image: "./img/31.jpg",
    type: "breakfast",
  },
  {
    name: "Pie with berries",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate cum nesciunt nihil nobis vero in rerum, deserunt    quia architecto exercitationem iste, sapiente reprehenderit mollitia ad rem dicta asperiores. Praesentium!",
    price: "8.5 $",
    image: "./img/33.jpg",
    type: "breakfast",
  },
  {
    name: "Cappuccino Coffee",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate cum nesciunt nihil nobis vero in rerum, deserunt    quia architecto exercitationem iste, sapiente reprehenderit mollitia ad rem dicta asperiores. Praesentium!",
    price: "1.5 $",
    image: "./img/29.jpg",
    type: "breakfast",
  },
  {
    name: "Snails in garlic sauce",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate cum nesciunt nihil nobis vero in rerum, deserunt    quia architecto exercitationem iste, sapiente reprehenderit mollitia ad rem dicta asperiores. Praesentium!",
    price: "19 $",
    image: "./img/snails_in_sauce.jpg",
    type: "dinner",
  },
  {
    name: "Baked chicken with vegetables",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate cum nesciunt nihil nobis vero in rerum, deserunt    quia architecto exercitationem iste, sapiente reprehenderit mollitia ad rem dicta asperiores. Praesentium!",
    price: "19.5 $",
    image: "./img/chiken.jpg",
    type: "lunch",
  },
  {
    name: "Turkey meat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate cum nesciunt nihil nobis vero in rerum, deserunt    quia architecto exercitationem iste, sapiente reprehenderit mollitia ad rem dicta asperiores. Praesentium!",
    price: "29.99 $",
    image: "./img/4.jpg",
    type: "lunch",
  },
  {
    name: "Hawaiian Pizza",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate cum nesciunt nihil nobis vero in rerum, deserunt    quia architecto exercitationem iste, sapiente reprehenderit mollitia ad rem dicta asperiores. Praesentium!",
    price: "12.99 $",
    image: "./img/1.jpg",
    type: "lunch",
  },
  {
    name: "Seafood plate",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate cum nesciunt nihil nobis vero in rerum, deserunt    quia architecto exercitationem iste, sapiente reprehenderit mollitia ad rem dicta asperiores. Praesentium!",
    price: "28.99 $",
    image: "./img/22.jpg",
    type: "lunch",
  },
  {
    name: "Soup",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate cum nesciunt nihil nobis vero in rerum, deserunt    quia architecto exercitationem iste, sapiente reprehenderit mollitia ad rem dicta asperiores. Praesentium!",
    price: "8.99 $",
    image: "./img/8.jpg",
    type: "lunch",
  },
  {
    name: "Philadelphia rolls",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate cum nesciunt nihil nobis vero in rerum, deserunt    quia architecto exercitationem iste, sapiente reprehenderit mollitia ad rem dicta asperiores. Praesentium!",
    price: "38.99 $",
    image: "./img/23.jpg",
    type: "dinner",
  },
  {
    name: "Pasta Carbonara",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate cum nesciunt nihil nobis vero in rerum, deserunt    quia architecto exercitationem iste, sapiente reprehenderit mollitia ad rem dicta asperiores. Praesentium!",
    price: "15 $",
    image: "./img/2.jpg",
    type: "dinner",
  },
  {
    name: "Sushi set",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate cum nesciunt nihil nobis vero in rerum, deserunt    quia architecto exercitationem iste, sapiente reprehenderit mollitia ad rem dicta asperiores. Praesentium!",
    price: "39.99 $",
    image: "./img/27.jpg",
    type: "dinner",
  },
  {
    name: "Burger",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate cum nesciunt nihil nobis vero in rerum, deserunt    quia architecto exercitationem iste, sapiente reprehenderit mollitia ad rem dicta asperiores. Praesentium!",
    price: "8.3 $",
    image: "./img/burger.jpg",
    type: "lunch",
  },
  {
    name: "Stewed goat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate cum nesciunt nihil nobis vero in rerum, deserunt    quia architecto exercitationem iste, sapiente reprehenderit mollitia ad rem dicta asperiores. Praesentium!",
    price: "18.2 $",
    image: "./img/34.jpg",
    type: "dinner",
  },
  {
    name: "Fried chicken",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate cum nesciunt nihil nobis vero in rerum, deserunt    quia architecto exercitationem iste, sapiente reprehenderit mollitia ad rem dicta asperiores. Praesentium!",
    price: "7.5 $",
    image: "./img/chicken.jpg",
    type: "lunch",
  },
  {
    name: "Pumpkin soup",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate cum nesciunt nihil nobis vero in rerum, deserunt    quia architecto exercitationem iste, sapiente reprehenderit mollitia ad rem dicta asperiores. Praesentium!",
    price: "12.5 $",
    image: "./img/soup.jpg",
    type: "lunch",
  },
  {
    name: "Fried Eggs",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate cum nesciunt nihil nobis vero in rerum, deserunt    quia architecto exercitationem iste, sapiente reprehenderit mollitia ad rem dicta asperiores. Praesentium!",
    price: "10 $",
    image: "./img/fried_eggs-1.jpg",
    type: "breakfast",
  },
  {
    name: "Fried meat with rice and egg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate cum nesciunt nihil nobis vero in rerum, deserunt    quia architecto exercitationem iste, sapiente reprehenderit mollitia ad rem dicta asperiores. Praesentium!",
    price: "15 $",
    image: "./img/17.jpg",
    type: "dinner",
  },
  {
    name: "Sushi",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate cum nesciunt nihil nobis vero in rerum, deserunt    quia architecto exercitationem iste, sapiente reprehenderit mollitia ad rem dicta asperiores. Praesentium!",
    price: "20 $",
    image: "./img/9.jpg",
    type: "dinner",
  },
];

function renderDish(dish) {
  return `
    <div class="dish">
    <img src="${dish.image}"/>
    <div class="dish__content">
    <div class="dish__item">
    <h3 class="dish__title">${dish.name}</h3>
    <p class="dish__price">${dish.price}</p> 
    </div>
    <p class="dish__text">${dish.description}</p>
    </div>
    </div>
    `;
}

menu.forEach((dish) => {
  dishes.innerHTML += renderDish(dish);
});

let color;
function changeColor() {
  let cards = document.querySelectorAll(".dish");
  cards.forEach((card) => (card.style.background = color));
}

// ------ All button  ----------------------

function showAll() {
  dishes.innerHTML = "";
  menu.forEach((dish) => {
    dishes.innerHTML += renderDish(dish);
  });
}

document.querySelector("#btn-all").addEventListener("click", showAll);

// ------ Breakfast button  --------------------------------------------

const breakfast = menu.filter((dish) => dish.type === "breakfast");

function showBreakfast() {
  dishes.innerHTML = "";
  breakfast.forEach((dish) => {
    dishes.innerHTML += renderDish(dish);
  });
  color = "#ffb44469";
  changeColor();
}

document
  .querySelector("#btn-breakfast")
  .addEventListener("click", showBreakfast);

// ------ Lunch button ------------------------------------------

const lunch = menu.filter((dish) => dish.type === "lunch");

function showLunch() {
  dishes.innerHTML = "";
  lunch.forEach((dish) => {
    dishes.innerHTML += renderDish(dish);
  });
  color = "#1b5e8547";
  changeColor();
}

document.querySelector("#btn-lunch").addEventListener("click", showLunch);

// ------ Dinner button ------------------------------------------

const dinner = menu.filter((dish) => dish.type === "dinner");

function showDinner() {
  dishes.innerHTML = "";
  dinner.forEach((dish) => {
    dishes.innerHTML += renderDish(dish);
  });
  color = "#2e0c0969";
  changeColor();
}

document.querySelector("#btn-dinner").addEventListener("click", showDinner);
