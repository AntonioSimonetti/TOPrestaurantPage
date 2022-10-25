import { contact } from "./contact.js";
import { initialPage } from "./initialPage.js";
import { menuPage } from "./menuPage.js";

export function controller () {

    const contentDiv = document.querySelector("#content");

    let buttonDiv = document.createElement("div");
    buttonDiv.classList.add("buttonDiv");

    let buttonOne = document.createElement("button");
    buttonOne.textContent = "Home";
    buttonOne.classList.add("buttonOne");
    buttonDiv.appendChild(buttonOne);

    let buttonTwo = document.createElement("button");
    buttonTwo.textContent = "Menu";
    buttonTwo.classList.add("buttonTwo");
    buttonDiv.appendChild(buttonTwo);

    let buttonThree = document.createElement("button");
    buttonThree.textContent = "Contacts";
    buttonThree.classList.add("buttonThree");
    buttonDiv.appendChild(buttonThree);

    contentDiv.append(buttonDiv);
    buttonOne.addEventListener("click", initialPage);
    buttonTwo.addEventListener("click", menuPage);
    buttonThree.addEventListener("click", contact);

 };



