import cards from "./DB_content";
import "./resetcss.css";
import "./styles.css";
import img_noimage from "./img/no-image-icon-23494.png";

// Generate header
const header = document.getElementsByTagName("header")[0];
header.innerHTML = "";
const headerImage = document.createElement("img");
const headerAboutContainer = document.createElement("div");
const headerAboutTitle = document.createElement("h1");
const headerAboutParagraph = document.createElement("p");
const headerLinksContainer = document.createElement("div");
const headerLinkIcon = document.createElement("img");

headerImage.classList.add("header-image");
headerAboutContainer.classList.add("header-about-container");
headerAboutTitle.classList.add("header-title");
headerAboutParagraph.classList.add("header-paragraph");
headerLinksContainer.classList.add("header-links-container");
headerLinkIcon.classList.add("header-link-icon");

headerImage.src = img_noimage;
headerAboutTitle.innerHTML = "Title about me";
headerAboutParagraph.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ipsa culpa adipisci sequi esse ducimus nostrum deleniti voluptates corporis placeat!";
headerLinkIcon.src = img_noimage;

header.appendChild(headerImage);
headerAboutContainer.appendChild(headerAboutTitle);
headerAboutContainer.appendChild(headerAboutParagraph);
headerLinksContainer.appendChild(headerLinkIcon.cloneNode());
headerLinksContainer.appendChild(headerLinkIcon.cloneNode());
headerLinksContainer.appendChild(headerLinkIcon.cloneNode());
headerAboutContainer.appendChild(headerLinksContainer);
header.appendChild(headerAboutContainer);

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

    const linkContainer = document.createElement("div");
    linkContainer.classList.add("card-container-icons");

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
    linkContainer.appendChild(cardImageSourceCode);
    linkContainer.appendChild(cardImageLivePreview);
    cardElement.appendChild(linkContainer);
    cardElement.appendChild(cardDescription);

    mainContent.appendChild(cardElement);
}
