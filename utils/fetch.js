const URL = "https://680726a0e81df7060eb8fba8.mockapi.io";

export const fetchCandies = async () => {
  const response = await fetch(`${URL}/candies`);

  const data = await response.json();
  return data;
};

export const fetchCandyById = async (id) => {
  const response = await fetch(`${URL}/candies/${id}`);

  const data = await response.json();
  return data;
};

export const deleteCandyById = async (id) => {
  const response = await fetch(`${URL}/candies/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();
  return data;
};

export const insertCandy = async (data) => {
  const response = await fetch(`${URL}/candies`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  const candies = await response.json();
  return candies;
};
