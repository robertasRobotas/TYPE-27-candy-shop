import { fetchCandies } from "./utils/fetch.js";

const candiesWrapper = document.getElementById("candies-wrapper");

const buildCards = (data) => {
  data.forEach((d) => {
    const card = document.createElement("a");
    card.href = `./product/index.html?id=${d.id}`;

    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = d.title;

    const img = document.createElement("img");
    img.src = d.imgUrl;

    card.append(img);
    card.append(title);

    candiesWrapper.append(card);
  });
};

const buildScreen = async () => {
  const candies = await fetchCandies();
  buildCards(candies);
};

buildScreen();
