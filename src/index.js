import cards from "./DB_content";
import "./resetcss.css";
import "./animations.css";
import "./darkAndLightThemes.css";
import "./styles.css";
import img_noimage from "./img/no-image-icon-23494.png";
import icon_github from "./img/icon_github.svg";
import icon_linkedin from "./img/icon_linkedin.svg";
import icon_email from "./img/icon_envelope.svg";
import icon_phone from "./img/icon_phone-flip.svg";
// import icon_share from "./img/icon_share-square-thin.svg";
import icon_liveWeb from "./img/icon-site-browser.svg";

const svg_theme = document.createElementNS("http://www.w3.org/2000/svg", "svg");

var svg_path = document.createElementNS("http://www.w3.org/2000/svg", "path");

svg_theme.setAttribute("aria-hidden", "true");
svg_theme.setAttribute("viewBox", "0 0 200 200");
svg_theme.setAttribute("width", "200");
svg_theme.setAttribute("height", "200");

const svg_circle_lightBulb = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
);
svg_circle_lightBulb.setAttribute("cx", 100);
svg_circle_lightBulb.setAttribute("cy", 70);
svg_circle_lightBulb.setAttribute("r", 50);
svg_circle_lightBulb.setAttribute("fill", "none");
svg_circle_lightBulb.setAttribute("stroke", "black");
svg_circle_lightBulb.setAttribute("stroke-width", "20");

const svg_path_lightOn =
    "M7 130 L41 108 M75 135 L60 172 M125 135 L140 172 M193 130 L159 108";
const svg_path_lightOff =
    "M-178 249 L-76 183 M25 264 L-20 375 M174 264 L220 375 M378 249 L276 184";

svg_path.setAttribute("d", svg_path_lightOn);
svg_path.setAttribute("fill", "none");
svg_path.setAttribute("stroke", "black");
svg_path.setAttribute("stroke-width", "20");

svg_theme.appendChild(svg_circle_lightBulb);
svg_theme.appendChild(svg_path);

const bodyElem = document.getElementsByTagName("body")[0];

// Set light/dark theme
const btnThemeToggle = document.createElement("button");

btnThemeToggle.classList.add("btn-theme-toggle");

svg_theme.setAttribute("class", "btn-theme-toggle-svg");
btnThemeToggle.appendChild(svg_theme);

btnThemeToggle.setAttribute("title", "Toggle light/dark modes");

btnThemeToggle.addEventListener("click", () => {
    if (bodyElem.classList.contains("light")) {
        svg_path.setAttribute("d", svg_path_lightOff);
        bodyElem.setAttribute("class", "dark");
    } else {
        svg_path.setAttribute("d", svg_path_lightOn);
        bodyElem.setAttribute("class", "light");
    }
});

bodyElem.appendChild(btnThemeToggle);

// Generate header background
const headerBackground = document.createElement("div");
headerBackground.setAttribute("class", "header-background");

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

const iconGithub = headerLinkIcon.cloneNode();
iconGithub.src = icon_github;
iconGithub.setAttribute("title", "My GitHub profile");
const iconLinkedin = headerLinkIcon.cloneNode();
iconLinkedin.src = icon_linkedin;
iconLinkedin.setAttribute("title", "My Linkedin profile");

headerImage.src = img_noimage;
headerAboutTitle.innerHTML = "Title about me";
headerAboutParagraph.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ipsa culpa adipisci sequi esse ducimus nostrum deleniti voluptates corporis placeat!";
headerLinkIcon.src = img_noimage;

header.appendChild(headerBackground);
header.appendChild(headerImage);
headerAboutContainer.appendChild(headerAboutTitle);
headerAboutContainer.appendChild(headerAboutParagraph);
headerLinksContainer.appendChild(iconGithub);
headerLinksContainer.appendChild(iconLinkedin);
// headerLinksContainer.appendChild(headerLinkIcon.cloneNode());
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
    const cardTitle = document.createElement("h2");
    const cardDescription = document.createElement("p");

    const linkContainer = document.createElement("div");
    linkContainer.classList.add("card-container-icons");

    cardImageThumbnail.src = cardData.imgsrc;
    cardImageSourceCode.src = icon_github;
    cardImageLivePreview.src = icon_liveWeb;
    cardTitle.innerHTML = cardData.title;
    cardDescription.innerHTML = cardData.desc;

    cardImageThumbnail.classList.add("card-thumbnail");
    cardImageSourceCode.classList.add("card-icon");
    cardImageSourceCode.setAttribute("title", "Source code");
    cardImageLivePreview.classList.add("card-icon");
    cardImageLivePreview.setAttribute("title", "Live preview");

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
const footerDetailWrapper = document.createElement("address");

const footerTitle = document.createElement("h1");
const footerParagraph = document.createElement("p");
const footerPhoneContainer = document.createElement("div");
const footerTelephoneImg = document.createElement("img");
const footerTelephoneText = document.createElement("h2");
const footerEmailContainer = document.createElement("div");
const footerEmailImg = document.createElement("img");
const footerEmailText = document.createElement("h2");
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
footerTelephoneImg.src = icon_phone;
footerTelephoneImg.classList.add("footer-icon");
footerPhoneContainer.classList.add("footer-phone-container");
footerPhoneContainer.appendChild(footerTelephoneImg);
footerPhoneContainer.appendChild(footerTelephoneText);
footerDetailWrapper.appendChild(footerPhoneContainer);

footerEmailText.innerHTML = "email@email.com";
footerEmailImg.src = icon_email;
footerEmailImg.classList.add("footer-icon");
footerEmailContainer.classList.add("footer-email-container");
footerEmailContainer.appendChild(footerEmailImg);
footerEmailContainer.appendChild(footerEmailText);
footerDetailWrapper.appendChild(footerEmailContainer);
footerDetailWrapper.appendChild(footerLinksContainer);

footer.appendChild(footerDetailWrapper);
footerMainImg.src = img_noimage;
footer.appendChild(footerMainImg);

// Generate credits
const credits = document.getElementById("credits");
const linkToIcons = document.createElement("a");
credits.innerHTML = "";
linkToIcons.href = "https://www.flaticon.com";
linkToIcons.innerHTML = "Icons from Flaticon";
credits.appendChild(linkToIcons);
