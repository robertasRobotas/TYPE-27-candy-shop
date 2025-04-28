import { fetchCandyById, deleteCandyById } from "../utils/fetch.js";

const url = new URL(window.location.href);
const id = url.searchParams.get("id");

const title = document.getElementById("title");
const description = document.getElementById("description");
const img = document.getElementById("img");

const deleteBtn = document.getElementById("delete-btn");

const message = document.getElementById("message");

const insertDataToScreen = (candy) => {
  title.textContent = candy.title;
  description.textContent = candy.description;
  img.src = candy.imgUrl;
};

const buildScreen = async () => {
  const candy = await fetchCandyById(id);
  insertDataToScreen(candy);
};

buildScreen();

deleteBtn.addEventListener("click", async () => {
  const candy = await deleteCandyById(id);
  if (candy) {
    message.textContent = "Candy was added deleted";

    setTimeout(() => {
      window.location.replace("../index.html");
    }, 3000);
  }
});
