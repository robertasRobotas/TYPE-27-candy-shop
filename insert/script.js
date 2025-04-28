import { insertCandy } from "../utils/fetch.js";
import { validateInsert } from "../utils/validation.js";

const submitBtn = document.getElementById("sumbit-btn");
const titleInput = document.getElementById("title");
const ratingInput = document.getElementById("rating");
const imgUrlInput = document.getElementById("imgUrl");
const priceInput = document.getElementById("price");
const descriptionInput = document.getElementById("description");
const successMessage = document.getElementById("succsess-message");

submitBtn.addEventListener("click", async () => {
  const data = {
    title: titleInput.value,
    imgUrl: imgUrlInput.value,
    price: +priceInput.value,
    description: descriptionInput.value,
    rating: +ratingInput.value,
  };

  const isValidationError = validateInsert(data);

  if (isValidationError) {
    console.log("there is validation error");
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
