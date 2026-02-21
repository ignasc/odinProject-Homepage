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

// Generate footer

const footer = document.getElementsByTagName("footer")[0];
footer.innerHTML = "";
const footerDetailWrapper = document.createElement("div");

const footerTitle = document.createElement("h1");
const footerParagraph = document.createElement("p");
const footerPhoneContainer = document.createElement("div");
const footerTelephoneImg = document.createElement("img");
const footerTelephoneText = document.createElement("p");
const footerEmailContainer = document.createElement("div");
const footerEmailImg = document.createElement("img");
const footerEmailText = document.createElement("p");
const footerMainImg = document.createElement("img");
const footerLinksContainer = headerLinksContainer.cloneNode(true);
footerLinksContainer.setAttribute("class", ""); // remove classes that were set while setting up header links
footerLinksContainer.classList.add("footer-links-container");

footer.classList.add("footer-container");
footerDetailWrapper.classList.add("footer-detail-wrapper");
footerTitle.innerHTML = "Contacts";
footerDetailWrapper.appendChild(footerTitle);

footerParagraph.innerHTML =
    "My contact details are below." +
    "<br />" +
    "<br />" +
    "Feel free to get in touch.";
footerDetailWrapper.appendChild(footerParagraph);

footerTelephoneText.innerHTML = "+1234567890";
footerTelephoneImg.src = img_noimage;
footerTelephoneImg.classList.add("footer-icon");
footerPhoneContainer.classList.add("footer-phone-container");
footerPhoneContainer.appendChild(footerTelephoneImg);
footerPhoneContainer.appendChild(footerTelephoneText);
footerDetailWrapper.appendChild(footerPhoneContainer);

footerEmailText.innerHTML = "email@email.com";
footerEmailImg.src = img_noimage;
footerEmailImg.classList.add("footer-icon");
footerEmailContainer.classList.add("footer-email-container");
footerEmailContainer.appendChild(footerEmailImg);
footerEmailContainer.appendChild(footerEmailText);
footerDetailWrapper.appendChild(footerEmailContainer);
footerDetailWrapper.appendChild(footerLinksContainer);

footer.appendChild(footerDetailWrapper);
footerMainImg.src = img_noimage;
footer.appendChild(footerMainImg);
