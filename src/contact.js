import { controller } from "./controller";

export function contact() {
    
    const contentDiv = document.querySelector("#content");

    while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild)};

    controller()

    const contact = document.createElement("h1");
    contact.textContent = "CONTACTS";
    contact.classList.add("title");
    contentDiv.appendChild(contact);

    const map = document.createElement("img");
    map.classList.add("map");
    map.src = "../src/assets/googlemaps.jpg";
    map.alt = "spaghetti alle vongolefoto";
    contentDiv.appendChild(map);

    const number = document.createElement("p");
    number.classList.add("number");
    number.textContent = "+39 08153781999";
    contentDiv.appendChild(number);

    const indirizzo = document.createElement("p");
    indirizzo.classList.add("indirizzo");
    indirizzo.textContent = "Via tal dei tali, n27, Boscoreale(NA)";
    contentDiv.appendChild(indirizzo);
  };