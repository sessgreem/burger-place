import { useEffect, useState, useCallback } from "react";
import { storage } from "../firebase/index";

const useStorageUrlDownload = (imgRefURL) => {
    const [imageURL, setImageURL] = useState(null);
    const imgRef = storage.refFromURL(imgRefURL);

    const fetchImageUrl = useCallback(
        async (controller) => {
            try {
                const signal = controller.signal;
                const url = await imgRef.getDownloadURL();
                if (!signal.aborted) {
                    setImageURL(url);
                }
            } catch (error) {
                if (error.name === "AbortError")
                    console.log("Request Aborted!");
                else console.error(error);
            }
        },
        [imgRef]
    );

    useEffect(() => {
        const controller = new AbortController();
        fetchImageUrl(controller);
        return () => controller.abort();
    }, [fetchImageUrl]);

    return imageURL;
};

export default useStorageUrlDownload;
