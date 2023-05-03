document.addEventListener("DOMContentLoaded", function () {
  function renderData() {
    const localStorageData = JSON.parse(localStorage.getItem("data"));
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
        const firstImage = element.images[0].src;
        const img = document.createElement("img");
        img.setAttribute("src", firstImage);
        imgContainer.appendChild(img);

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
