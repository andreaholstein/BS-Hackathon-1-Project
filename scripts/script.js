let apiKey = "b7809874f0210df8a63e5ca16aa7f092d2b273eaa8728703f32298fcfd768539";
const api = new TravelApi(apiKey);
const waterImage = document.getElementById("water-img");
const mountainImage = document.getElementById("mountain-img");
const cityImage = document.getElementById("city-img");

let activity;

function displayDestination(destinationData) {
  const results = document.querySelector(".results__container");

  destinationData.forEach((data) => {
    const destinationName = document.createElement("h3");
    destinationName.classList.add("results__title");
    destinationName.textContent = data.title;
    results.appendChild(destinationName);

    const destinationType = document.createElement("p");
    destinationType.classList.add("results__type");
    destinationType.textContent = data.type;
    results.appendChild(destinationType);

    const destinationImage = document.createElement("img");
    destinationImage.classList.add("results__img");
    destinationImage.setAttribute("src", data.thumbnail);
    results.appendChild(destinationImage);

    const destinationRating = document.createElement("span");
    destinationRating.textContent = data.rating;
    results.appendChild(destinationRating);
  });
}

async function fetchDestinations(activityData) {
  const destinationData = await api.getDestinations(activityData);
  console.log(destinationData);
  displayDestination(destinationData);
}

waterImage.addEventListener("click", (event) => {
  event.preventDefault();
  //console.log(activity);
  fetchDestinations("beach");
});

mountainImage.addEventListener("click", (event) => {
  event.preventDefault();
  //console.log(activity);
  fetchDestinations("mountain");
});

cityImage.addEventListener("click", (event) => {
  event.preventDefault();
  //console.log(activity);
  fetchDestinations("city");
});
