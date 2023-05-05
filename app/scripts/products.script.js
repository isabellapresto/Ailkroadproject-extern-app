if (localStorage.getItem("products")) {
  // If the data already exists in localStorage, do nothing
  console.log("Products already exists in localStorage");
} else {
  // If the data doesn't exist in localStorage, make the fetch request
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "http://localhost/SilkRoadTwo/wp-json/wc/v3/products?oauth_consumer_key=ck_fd11ad2dc78f051ee84accc5924d3c79b5b9a02f&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1683287441&oauth_nonce=nFEth4ubex1&oauth_version=1.0&oauth_signature=StsW9YmTGFuWS6Qob%252BRUHxXXL1s%253D",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      const orderData = result;
      console.log(orderData);
      localStorage.setItem("products", JSON.stringify(orderData));
    })
    .catch((error) => console.log("error", error));
}

document.addEventListener("DOMContentLoaded", function () {
  function renderData() {
    const localStorageData = JSON.parse(localStorage.getItem("products"));
    const container = document.createElement("div");
    container.classList.add("mainDiv");

    if (Array.isArray(localStorageData)) {
      localStorageData.forEach((element) => {
        const dataDiv = document.createElement("div");
        dataDiv.classList.add("contentDiv");
        const nameHeader = document.createElement("h1");
        const price = document.createElement("p");
        const link = document.createElement("a");
        link.innerHTML = "Link till produkten";

        link.setAttribute("href", element.permalink);
        link.setAttribute("target", "_blank");
        const linkContainer = document.createElement("div");
        linkContainer.classList.add("storeLink");
        linkContainer.appendChild(link);
        const shortDescription = document.createElement("p");

        nameHeader.innerHTML = element.name;
        price.innerHTML = `Pris: ${element.price}`;
        shortDescription.innerHTML = element.post_excerpt_stackable;

        const imgContainer = document.createElement("div");
        imgContainer.classList.add("imgContainer");

        // grab the first image from each product and set its source
        if (element.images && element.images.length > 0) {
          const firstImage = element.images[0].src;
          const img = document.createElement("img");
          img.setAttribute("src", firstImage);
          imgContainer.appendChild(img);
        }
        dataDiv.appendChild(imgContainer);
        dataDiv.appendChild(nameHeader);
        dataDiv.appendChild(price);
        dataDiv.appendChild(shortDescription);
        dataDiv.appendChild(linkContainer);
        container.appendChild(dataDiv);
      });
    } else {
      container.innerHTML = "No data found in local storage";
    }

    if (document.body) {
      const main = document.querySelector("main");
      main.appendChild(container);
    } else {
      console.error("Unable to append container element to document body");
    }
  }

  renderData();
});
