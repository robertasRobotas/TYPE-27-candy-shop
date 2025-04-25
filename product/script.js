const url = new URL(window.location.href);
const id = url.searchParams.get("id");

const title = document.getElementById("title");
const description = document.getElementById("description");
const img = document.getElementById("img");

const deleteBtn = document.getElementById("delete-btn");

const message = document.getElementById("message");

console.log(id);

const fetchCandyById = async () => {
  const response = await fetch(
    `https://680726a0e81df7060eb8fba8.mockapi.io/candies/${id}`
  );

  const data = await response.json();
  return data;
};

const deleteCandyById = async () => {
  const response = await fetch(
    `https://680726a0e81df7060eb8fba8.mockapi.io/candies/${id}`,
    {
      method: "DELETE",
    }
  );

  const data = await response.json();
  return data;
};

const insertDataToScreen = (candy) => {
  title.textContent = candy.title;
  description.textContent = candy.description;
  img.src = candy.imgUrl;
};

const buildScreen = async () => {
  const candy = await fetchCandyById();
  insertDataToScreen(candy);
};

buildScreen();

deleteBtn.addEventListener("click", async () => {
  const candy = await deleteCandyById();
  if (candy) {
    message.textContent = "Candy was added deleted";

    setTimeout(() => {
      window.location.replace("../index.html");
    }, 3000);
  }
});
