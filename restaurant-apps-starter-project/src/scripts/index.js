import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";

const hamburgerButtonElement = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");
const mainElement = document.querySelector("body");

hamburgerButtonElement.addEventListener('click', (event) => {
  if(drawerElement.classList.contains('open')) {
    drawerElement.classList.remove('open');
  } else {
    drawerElement.classList.add('open');
  }
});

document.addEventListener('click', (event) => {
  if (event.code === 'Escape') {
    drawerElement.classList.remove('open');
  }
});

mainElement.addEventListener("clik", (event) => {
  drawerElement.classList.remove("open");
  event.stopPropagation();
});

const dataPromise = import('../public/data/DATA.json');

dataPromise
  .then(data => {
    const restaurants = data.default.restaurants;
    displayRestaurants(restaurants);
  })
  .catch(error => {
    console.log('Error:', error);
  });

  
const displayRestaurants = (restaurants) => {
  const restaurantList = document.createElement("ul");

  restaurants.forEach((restaurant) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("tabindex", 0);
    
    const restaurantName = document.createElement("h2");
    restaurantName.textContent = restaurant.name;

    const restaurantImage = document.createElement("img");
    restaurantImage.src = restaurant.pictureId;
    restaurantImage.alt = restaurant.name;

    const restaurantDetails = document.createElement("p");
    restaurantDetails.textContent = `City: ${restaurant.city} | Rating: ${restaurant.rating}`;

    const restaurantDescription = document.createElement("p");
    restaurantDescription.textContent = restaurant.description;
    restaurantDescription.classList.add("restaurant-desc");

    listItem.appendChild(restaurantImage);
    listItem.appendChild(restaurantName);
    listItem.appendChild(restaurantDetails);
    listItem.appendChild(restaurantDescription);

    restaurantList.appendChild(listItem);
  });

  const restaurantContainer = document.getElementById("restaurantContainer");
  restaurantContainer.appendChild(restaurantList);
};
