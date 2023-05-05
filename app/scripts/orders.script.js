if (localStorage.getItem("orders")) {
  // If the data already exists in localStorage, do nothing
  console.log("Data already exists in localStorage");
} else {
  // If the data doesn't exist in localStorage, make the fetch request
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "http://localhost:8888/wp_inlamning2/wp-json/wc/v3/orders?oauth_consumer_key=ck_7065421a6cd1a33bc429e8cfc25117304629b353&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1683202251&oauth_nonce=IfyLTPeToJ5&oauth_version=1.0&oauth_signature=dd06D%252Ff4tQCd4d%252BFvmve5YTtryo%253D",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      const orderData = result;
      console.log(orderData);
      localStorage.setItem("orders", JSON.stringify(orderData));
    })
    .catch((error) => console.log("error", error));
}

document.addEventListener("DOMContentLoaded", function () {
  function renderData() {
    const localStorageData = JSON.parse(localStorage.getItem("orders"));
    const container = document.createElement("div");
    container.classList.add("mainDiv");

    if (localStorageData) {

      
      localStorageData.forEach((element) => {
        const orderList = document.createElement('ul');
        orderList.classList.add('listAnsvarig');
        const orderItem = document.createElement('li')
        const statusItem = document.createElement('li')
        const totalSumItem = document.createElement('li')
        const dateItem = document.createElement('li')
        const customerItem = document.createElement('li')

        orderItem.innerHTML = `Order ID; ${element.id}`
        statusItem.innerHTML = `Order Status; ${element.status}`
        totalSumItem.innerHTML = `Order Sum; ${element.total}`
        dateItem.innerHTML = `Order Date; ${element.date_created}`
        customerItem.innerHTML = `Full Name; ${element.billing.first_name} ${element.billing.last_name} `

        orderList.appendChild(customerItem);
        orderList.appendChild(orderItem);
        orderList.appendChild(dateItem);
        orderList.appendChild(totalSumItem);
        orderList.appendChild(statusItem);

        container.appendChild(orderList);
      });

    
    } else {
      container.innerHTML = "No data found in local storage"
    };

    if (document.body) {
      const main = document.querySelector('main')
      main.appendChild(container)
    } else {
      console.error("Unable to append container element to document body");
    }
  }

  renderData();
});
