import { controller } from "./controller";

export function initialPage() {
    const contentDiv = document.querySelector("#content");

    while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild)};

    controller();

    const title = document.createElement("h1");
    title.textContent = "TOTINO RESTAURANT";
    title.classList.add("title");
    contentDiv.appendChild(title);
  
    const image = document.createElement("img");
    image.classList.add("top-image");
    image.src = "../src/assets/restaurant.avif";
    image.alt = "spaghetti foto";
    contentDiv.appendChild(image);
  
    let copy = document.createElement("p");
    copy.classList.add("landing-copy");
    copy.textContent = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";
    contentDiv.appendChild(copy); 

    let copyTwo = document.createElement("p");
    copyTwo.classList.add("landing-copy");
    copyTwo.textContent = "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem..";
    contentDiv.appendChild(copyTwo); 
  };