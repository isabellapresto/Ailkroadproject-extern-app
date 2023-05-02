function fetchWcProducts() {
  const consumerKey = "";
  const consumerSecret = "";
  const url =
    "http://localhost/The%20Silk%20Road%20Project/wp-json/wc/v3/products";

  const requestOptions = {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(consumerKey + ":" + consumerSecret),
    }),
  };

  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

fetchWcProducts();
