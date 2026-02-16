import cards from "./DB_content";
import "./resetcss.css";
import "./styles.css";
import img_none from "./img/no-image-icon-23494.png";

// Generate a list of cards
const mainContent = document.getElementsByTagName("main")[0];
mainContent.innerHTML = "";
const cardContainer = document.createElement("div");
cardContainer.classList.add("card");

for (let i = 0; i < cards.length; i++) {
    const cardData = cards[i];
    const cardElement = cardContainer.cloneNode();
    const cardImage = document.createElement("img");
    const cardHeader = document.createElement("h1");
    const cardDescription = document.createElement("p");

    cardImage.src = img_none;
    cardHeader.innerHTML = cardData.title;
    cardDescription.innerHTML = cardData.desc;

    cardElement.appendChild(cardImage);
    cardElement.appendChild(cardHeader);
    cardElement.appendChild(cardDescription);

    mainContent.appendChild(cardElement);
}
