const cards = [];
import img_noImage from "./img/no-image-icon-23494.png";
import img_sourceCode from "./img/img_sourceCode.png";
import img_livePreview from "./img/img_livePreview.png";

class Card {
    constructor(title = "Title", desc = "Description", imgsrc = img_noImage) {
        this.title = title;
        this.desc = desc;
        this.imgsrc = imgsrc;
        this.imgSourceCode = img_sourceCode;
        this.imgLivePreview = img_livePreview;
    }
}

for (let i = 0; i < 10; i++) {
    cards.push(
        new Card(`Title ${i}`, `This is the description No.${i} for the card.`)
    );
}

export default cards;
