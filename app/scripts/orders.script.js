if (localStorage.getItem("data")) {
  // If the data already exists in localStorage, do nothing
  console.log("Data already exists in localStorage");
} else {
  // If the data doesn't exist in localStorage, make the fetch request
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "http://localhost/SilkRoadTwo/wp-json/wc/v3/products?oauth_consumer_key=ck_aa8f876f0bccfed923354648302d677eca4542c1&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1683116038&oauth_nonce=bIfvGyip75d&oauth_version=1.0&oauth_signature=t0uaKXtva5VezHuB17jN5d5VmPc%253D",
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
        console.log(element);
        const dataDiv = document.createElement("div");
        const nameHeader = document.createElement("h1");
        const shortDescription = document.createElement("p");

        nameHeader.innerHTML = element.name;
        shortDescription.innerHTML = element.description;

        const imgContainer = document.createElement("div");
        imgContainer.classList.add("imgContainer");
        dataDiv.appendChild(imgContainer);

        // grab the first image from each product and set its source
        if (element.images && element.images.length > 0) {
          const firstImage = element.images[0].src;
          const img = document.createElement("img");
          img.setAttribute("src", firstImage);
          imgContainer.appendChild(img);
        }

        dataDiv.appendChild(nameHeader);
        dataDiv.appendChild(shortDescription);
        container.appendChild(dataDiv);
      });
    } else {
      container.innerHTML = "No data found in local storage";
    }

    if (document.body) {
      document.body.appendChild(container);
    } else {
      console.error("Unable to append container element to document body");
    }
  }

  renderData();
});
