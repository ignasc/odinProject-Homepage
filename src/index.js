import cards from "./DB_content";
import "./resetcss.css";
import "./styles.css";

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

    cardImage.src = cardData.imgsrc;
    cardHeader.innerHTML = cardData.title;
    cardDescription.innerHTML = cardData.desc;

    cardElement.appendChild(cardImage);
    cardElement.appendChild(cardHeader);
    cardElement.appendChild(cardDescription);

    mainContent.appendChild(cardElement);
}
