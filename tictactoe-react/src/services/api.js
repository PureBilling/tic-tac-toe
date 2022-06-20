const MOVEMENT_ENDPOINT = "http://127.0.0.1:7999/movement";

export const getMovement = async (data) => {
  const response = await fetch(MOVEMENT_ENDPOINT, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  return response.json();
};
