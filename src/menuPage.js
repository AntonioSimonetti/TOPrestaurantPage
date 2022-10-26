import { controller } from "./controller";
import menu1 from "./assets/spaghettiDue.jpg";
import menu2 from "./assets/salmone.jpg";
import menu3 from "./assets/steak.jpg";
import menu4 from "./assets/pollo.jpg";
import menu5 from "./assets/zuppa.jpg";
import menu6 from "./assets/dessert.jpg";


export function menuPage() {
    
    const contentDiv = document.querySelector("#content");

    while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.firstChild)};

    controller()

    const title = document.createElement("h1");
    title.textContent = "MENU";
    title.classList.add("title");
    contentDiv.appendChild(title);
    
    const containerOne = document.createElement("div");
    containerOne.classList.add("containerOne");
    contentDiv.appendChild(containerOne);

    const block1 = document.createElement("div");
    block1.classList.add("blockOne");

    const image1 = document.createElement("img");
    image1.classList.add("menuOne");
    image1.src = menu1;
    image1.alt = "spaghetti alle vongolefoto";
    block1.appendChild(image1);
  
    let copy1 = document.createElement("p");
    copy1.classList.add("menuOneTxt");
    copy1.textContent = "Spaghetti alle vongole";
    block1.appendChild(copy1); 

    containerOne.appendChild(block1);

    const block2 = document.createElement("div");
    block2.classList.add("blockTwo");

    const image2 = document.createElement("img");
    image2.classList.add("menuOne");
    image2.src = menu2;
    image2.alt = "salmone";
    block2.appendChild(image2);
  
    let copy2 = document.createElement("p");
    copy2.classList.add("menuOneTxt");
    copy2.textContent = "Salmone al forno con carote e zucchine";
    block2.appendChild(copy2); 

    containerOne.appendChild(block2);

    const containerTwo = document.createElement("div");
    containerTwo.classList.add("containerTwo");
    contentDiv.appendChild(containerTwo);

    const block3 = document.createElement("div");
    block3.classList.add("blockThree");

    const image3 = document.createElement("img");
    image3.classList.add("menuOne");
    image3.src = menu3;
    image3.alt = "steak foto";
    block3.appendChild(image3);
  
    let copy3 = document.createElement("p");
    copy3.classList.add("menuOneTxt");
    copy3.textContent = "Manzo con carote ed asparagi";
    block3.appendChild(copy3); 

    containerTwo.appendChild(block3);

    const block4 = document.createElement("div");
    block4.classList.add("blockFour");

    const image4 = document.createElement("img");
    image4.classList.add("menuOne");
    image4.src = menu4;
    image4.alt = "pollo foto";
    block4.appendChild(image4);
  
    let copy4 = document.createElement("p");
    copy4.classList.add("menuOneTxt");
    copy4.textContent = "Pollo fritto con asparagi e crema al burro";
    block4.appendChild(copy4); 

    containerTwo.appendChild(block4);

    const containerThree = document.createElement("div");
    containerThree.classList.add("containerThree");
    contentDiv.appendChild(containerThree);

    const block5 = document.createElement("div");
    block5.classList.add("blockFive");

    const image5 = document.createElement("img");
    image5.classList.add("menuOne");
    image5.src = menu5;
    image5.alt = "zuppa foto";
    block5.appendChild(image5);
  
    let copy5 = document.createElement("p");
    copy5.classList.add("menuOneTxt");
    copy5.textContent = "Riso in zuppa con carote patate e mais";
    block5.appendChild(copy5); 

    containerThree.appendChild(block5);

    const block6 = document.createElement("div");
    block6.classList.add("blockSix");

    const image6 = document.createElement("img");
    image6.classList.add("menuOne");
    image6.src = menu6;
    image6.alt = "dessert foto";
    block6.appendChild(image6);
  
    let copy6 = document.createElement("p");
    copy6.classList.add("menuOneTxt");
    copy6.textContent = "Pancake con panna e fragole";
    block6.appendChild(copy6); 

    containerThree.appendChild(block6);

  };
