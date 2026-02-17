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
    const cardImageThumbnail = document.createElement("img");
    const cardImageSourceCode = document.createElement("img");
    const cardImageLivePreview = document.createElement("img");
    const cardTitle = document.createElement("h1");
    const cardDescription = document.createElement("p");

    cardImageThumbnail.src = cardData.imgsrc;
    cardImageSourceCode.src = cardData.imgSourceCode;
    cardImageLivePreview.src = cardData.imgLivePreview;
    cardTitle.innerHTML = cardData.title;
    cardDescription.innerHTML = cardData.desc;

    cardImageThumbnail.classList.add("card-thumbnail");
    cardImageSourceCode.classList.add("card-icon");
    cardImageLivePreview.classList.add("card-icon");

    cardElement.appendChild(cardImageThumbnail);
    cardElement.appendChild(cardTitle);
    cardElement.appendChild(cardImageSourceCode);
    cardElement.appendChild(cardImageLivePreview);
    cardElement.appendChild(cardDescription);

    mainContent.appendChild(cardElement);
}
