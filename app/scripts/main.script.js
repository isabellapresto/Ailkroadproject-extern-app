function fetchWcProducts() {
  const consumerKey = "";
  const consumerSecret = "";
  const url =
    "http://localhost:8888/the_silk_road_project/wp-json/wc/v3/products";

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
  
  // var myHeaders = new Headers();
  // myHeaders.append("", "");
  // myHeaders.append("Access-Control-Request-Method", "");
  
  // var requestOptions = {
  //   method: 'GET',
  //   headers: myHeaders,
  //   redirect: 'follow'
  // };
  
  // fetch("http://localhost:8888/the_silk_road_project/wp-json/wc/v3/products?oauth_consumer_key=ck_677a936c591ca7de5803c4cd90953962db1d5e3b&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1683027568&oauth_nonce=fzf5naTTsRU&oauth_version=1.0&oauth_signature=5DVkz%2FEg1lGTdEB5d15T5TlZkKc%3D", requestOptions)
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));

}

fetchWcProducts();

//från php-koden
// header( 'Access-Control-Allow-Origin: *' );
//   header( 'Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS' );
//   header( 'Access-Control-Allow-Credentials: true' );
//   header( 'Access-Control-Allow-Headers: Authorization, Content-Type' );