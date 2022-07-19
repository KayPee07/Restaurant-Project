import Picture from "./coffee-shop.jpeg";

function renderHome() {
  // image
  const image = new Image();
  image.src = Picture;

  const homeContent = document.createElement("div");
  const title = document.createElement("h2");
  homeContent.appendChild(title);
  title.textContent = "About Us";
  const description = document.createElement("div");
  homeContent.appendChild(description)
  description.classList.add("description");
  description.textContent =
    "Ek bar Sewa ka mouka jarur deve...";
  const imageContainer = document.createElement("div");
  const imgDescContainer = document.createElement("div");
  imgDescContainer.classList.add("img-desc-container");
  imgDescContainer.append(description, imageContainer);
  homeContent.append(imgDescContainer);
  imageContainer.append(image);
  imageContainer.classList.add("img-container");
  const hours = document.createElement("div");
  homeContent.appendChild(hours);
  const hoursTitle = document.createElement("h3");
  hours.appendChild(hoursTitle);
  hoursTitle.textContent = "Hours";
  const timetable = document.createElement("div");
  hours.appendChild(timetable);
  timetable.innerHTML =
    "<p>Monday - Saturday: 10am - 11pm</p><p>Sunday: 11am - 8pm</p>";
  const location = document.createElement("div");
  homeContent.appendChild(location);
  const locationTitle = document.createElement("h3");
  location.appendChild(locationTitle);
  locationTitle.textContent = "Location";
  const address = document.createElement("p");
  location.appendChild(address);
  address.textContent = "Sector 67, Near Sebiz Square, Mohali";
  // homeContent.appendChild(image)
  homeContent.classList.add("container");
  return homeContent;
}

export { renderHome };
