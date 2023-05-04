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
    "http://localhost/SilkRoadTwo/wp-json/wc/v3/products?oauth_consumer_key=ck_aa8f876f0bccfed923354648302d677eca4542c1&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1683118800&oauth_nonce=WNSp6skTTDr&oauth_version=1.0&oauth_signature=Py8sX0W%252FcQROlm1M01%252FgOpDT1h8%253D",
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
    container.classList.add("contentDiv");

    if (localStorageData) {
      localStorageData.forEach((element) => {
        const nameHeader = document.createElement("h1");
        const shortDescription = document.createElement("p");

        nameHeader.innerHTML = element.name;
        shortDescription.innerHTML = element.description;

        const imgContainer = document.createElement("div");
        imgContainer.classList.add("imgContainer");
        container.appendChild(imgContainer);

        // grab the first image from each product and set its source
        if (element.images && element.images.length > 0) {
          const firstImage = element.images[0].src;
          const img = document.createElement("img");
          img.setAttribute("src", firstImage);
          imgContainer.appendChild(img);
        }

        container.appendChild(nameHeader);
        container.appendChild(shortDescription);
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
