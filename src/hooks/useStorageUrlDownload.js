import { useEffect, useState } from "react";
import { storage } from "../firebase/index";

const useStorageUrlDownload = (imgRefURL) => {
    const [imageURL, setImageURL] = useState(null);

    useEffect(() => {
        const imgRef = storage.refFromURL(imgRefURL);
        imgRef.getDownloadURL().then((URL) => {
            setImageURL(URL);
        });
    }, [imgRefURL]);

    return imageURL;
};

export default useStorageUrlDownload;
