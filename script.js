const candiesWrapper = document.getElementById("candies-wrapper");

const fetchCandies = async () => {
  const response = await fetch(
    "https://680726a0e81df7060eb8fba8.mockapi.io/candies"
  );

  const data = await response.json();
  return data;
};

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
