// var orderData = JSON.parse(localStorage.getItem('orders'));
// if(localStorage.getItem('orders')){
// console.log(orderData);

// // displayOrders(orderData);
// } else {
// fetchData();
// }
// function fetchData(){
// var requestOptions = {
// method: 'GET',
// redirect: 'follow'
// };

// fetch("http://localhost:8888/thesilkroadproject/wp-json/wc/v3/orders?oauth_consumer_key=ck_e42c13ce8bffde3eda4f822496957052d8974e01&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1683104373&oauth_nonce=ugqTI4KaTHy&oauth_version=1.0&oauth_signature=Cxh0G2JxM8fR1UtuZPHUVx0N5L4%3D", requestOptions)
// .then(response => response.json())
// .then(result => { orderData = result;

// console.log(orderData);

// localStorage.setItem('orders', JSON.stringify(orderData))} )
// .catch(error => console.log('error', error));
// }

// fetchData();

// function renderData(){
// const localStorageData = JSON.parse(localStorage.getItem("data"));
// const container = document.createElement("div");
// container.classList.add("mainDiv");

// localStorageData.forEach(element => {
// const dataDiv = document.createElement("div");
// const header = document.createElement("h1");
// const text = document.createElement("p");

// header.innerHTML = element.id;
// text.innerHTML = element.status;

// dataDiv.appendChild(header);
// dataDiv.appendChild(text);
// container.appendChild(dataDiv);

// });

// document.body.appendChild(container);

// }

// renderData();

var requestOptions = {
 method: 'GET',
 redirect: 'follow'
};

fetch("http://localhost:8888/thesilkroadproject/wp-json/wc/v3/orders?oauth_consumer_key=ck_e42c13ce8bffde3eda4f822496957052d8974e01&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1683105416&oauth_nonce=3CgymDn1iM6&oauth_version=1.0&oauth_signature=FFfmrRlOuIkAlr2JH0nSlRidFuY%3D", requestOptions)
 .then(response => response.json())
 .then(result => { 
   const orderData = result;
   console.log(orderData);
   localStorage.setItem('data', JSON.stringify(orderData))} )
 .catch(error => console.log('error', error));

 function renderData(){
  const localStorageData = JSON.parse(localStorage.getItem("orders"));
  const container = document.createElement("div");
  container.classList.add("mainDiv");

  localStorageData.forEach(element => {
   console.log(element);
    const dataDiv = document.createElement("div");
    const header = document.createElement("h1");
    const text = document.createElement("p");

    header.innerHTML = element.id;
    text.innerHTML = element.status;

    dataDiv.appendChild(header);
    dataDiv.appendChild(text);
    container.appendChild(dataDiv);
  });

  document.body.appendChild(container);
}

renderData();

console.log(localStorageData);



