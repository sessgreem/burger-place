import ProgressiveImage from "react-progressive-image";
import blurred from "../assets/images/blurred.webp";

const useProgressiveImage = (imageURL, imgAlt) => {
    const img = (
        <ProgressiveImage src={imageURL} placeholder={blurred}>
            {(src) => <img src={src} alt={imgAlt} />}
        </ProgressiveImage>
    );

    return img;
};

export default useProgressiveImage;
