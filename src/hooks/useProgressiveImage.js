import ProgressiveImage from "react-progressive-image";
import menuBlurred from "../assets/images/blurred/menuBlurred.webp";
import burgerBlurred from "../assets/images/blurred/burgerBlurred.webp";
import drinkBlurred from "../assets/images/blurred/colaBlurred.webp";
import sweetBlurred from "../assets/images/blurred/whiteShakeBlurred.webp";
import sideBlurred from "../assets/images/blurred/FriesBlurred.webp";
import menuMilkBlurred from "../assets/images/blurred/menuMilkBlurred.webp";
import saladBlurred from "../assets/images/blurred/saladBlurred.webp";

const useProgressiveImage = (imageURL, imgAlt, blurredType) => {
    let blurred = null;
    switch (blurredType) {
        case "menu":
            blurred = menuBlurred;
            break;
        case "drink":
            blurred = drinkBlurred;
            break;
        case "side":
            blurred = sideBlurred;
            break;
        case "sweet":
            blurred = sweetBlurred;
            break;
        case "burger":
            blurred = burgerBlurred;
            break;
        case "menuMilk":
            blurred = menuMilkBlurred;
            break;
        case "salad":
            blurred = saladBlurred;
            break;
        default:
            blurred = menuBlurred;
            break;
    }
    const img = (
        <ProgressiveImage src={imageURL} placeholder={blurred}>
            {(src) => <img src={src} alt={imgAlt} />}
        </ProgressiveImage>
    );

    return img;
};

export default useProgressiveImage;
