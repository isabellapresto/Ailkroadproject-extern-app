if (localStorage.getItem("posts")) {
  // If the data already exists in localStorage, do nothing
  console.log("posts already exists in localStorage");
} else {
  // If the data doesn't exist in localStorage, make the fetch request
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "http://localhost/SilkRoadTwo/wp-json/wp/v2/posts?oauth_consumer_key=ck_aa8f876f0bccfed923354648302d677eca4542c1&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1683188597&oauth_nonce=zctn8tCrmp9&oauth_version=1.0&oauth_signature=VCqLyCSPPU%252BWqOZwh%252F4M7M%252BwOQ0%253D",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      const postsData = result;
      console.log(postsData);
      localStorage.setItem("posts", JSON.stringify(postsData));
    })
    .catch((error) => console.log("error", error));
}

document.addEventListener("DOMContentLoaded", function () {
  function renderData() {
    const localStorageData = JSON.parse(localStorage.getItem("posts"));
    const container = document.createElement("div");
    container.classList.add("mainDiv");

    if (localStorageData && localStorageData.length > 0) {
      localStorageData.slice(0, 2).forEach((element) => {
        // Only loop over the first two items
        console.log(element);
        const dataDiv = document.createElement("div");
        dataDiv.classList.add("contentDiv");
        const nameHeader = document.createElement("h1");
        const shortDescription = document.createElement("p");

        nameHeader.innerHTML = element.title.rendered;
        shortDescription.innerHTML = element.excerpt.rendered;

        const imgContainer = document.createElement("div");
        imgContainer.classList.add("imgContainer");

        // grab the first image from each product and set its source
        if (
          element.featured_image_urls.thumbnail &&
          element.featured_image_urls.thumbnail.length > 0
        ) {
          const firstImage = element.featured_image_urls.thumbnail[0];
          const img = document.createElement("img");
          img.setAttribute("src", firstImage);
          imgContainer.appendChild(img);
        }

        dataDiv.appendChild(imgContainer);
        dataDiv.appendChild(nameHeader);
        dataDiv.appendChild(shortDescription);
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
