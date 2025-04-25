const submitBtn = document.getElementById("sumbit-btn");
const titleInput = document.getElementById("title");
const ratingInput = document.getElementById("rating");
const imgUrlInput = document.getElementById("imgUrl");
const priceInput = document.getElementById("price");
const descriptionInput = document.getElementById("description");
const successMessage = document.getElementById("succsess-message");

const insertCandy = async (data) => {
  const response = await fetch(
    "https://680726a0e81df7060eb8fba8.mockapi.io/candies",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }
  );

  const candies = await response.json();
  return candies;
};

submitBtn.addEventListener("click", async () => {
  const data = {
    title: titleInput.value,
    imgUrl: imgUrlInput.value,
    price: +priceInput.value,
    description: descriptionInput.value,
    rating: +ratingInput.value,
  };

  if (isNaN(data.price) || isNaN(data.rating)) {
    console.log("Price and  rating should be a number");
    return;
  }

  if (
    !data.title ||
    !data.imgUrl ||
    !data.price ||
    !data.description ||
    !data.rating
  ) {
    console.log("Please insert all the data");
    return;
  }

  const candy = await insertCandy(data);

  if (candy) {
    successMessage.textContent = "Candy was added successfully";

    setTimeout(() => {
      window.location.replace("../index.html");
    }, 3000);
  }
});
