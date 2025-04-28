export const validateInsert = (data) => {
  let isError = false;

  if (isNaN(data.price) || isNaN(data.rating)) {
    console.log("Price and  rating should be a number");
    isError = true;
  }

  if (
    !data.title ||
    !data.imgUrl ||
    !data.price ||
    !data.description ||
    !data.rating
  ) {
    console.log("Please insert all the data");
    isError = true;
  }

  const imgUrlRegex =
    /^https?:\/\/.*\.(jpg|jpeg|png|gif|webp|bmp|svg)(\?.*)?$/i;

  if (!imgUrlRegex.test(data.imgUrl)) {
    console.log("Image URL is bad");
    isError = true;
  }

  return isError;
};
