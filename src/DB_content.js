const cards = [];
import img_noImage from "./img/no-image-icon-23494.png";

class Card {
    constructor(title = "Title", desc = "Description", imgsrc = img_noImage) {
        this.title = title;
        this.desc = desc;
        this.imgsrc = imgsrc;
    }
}

for (let i = 0; i < 10; i++) {
    cards.push(
        new Card(`Title ${i}`, `This is the description No.${i} for the card.`)
    );
}

export default cards;
