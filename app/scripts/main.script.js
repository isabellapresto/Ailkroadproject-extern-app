function fetchWcProducts() {
  const consumerKey = "ck_46dc8ab29eede8194dcc71ddc4216d70d16dfd34";
  const consumerSecret = "cs_48f2d8a42a58302528998fa1fd5cb3a960487210";
  const url =
    "http://localhost/The%20Silk%20Road%20Project//wp-json/wc/v3/products";

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
