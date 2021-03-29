import capitalizeEveryWord from "./capitalizeEveryWord";

export const formatToURL = (URL) => {
    const toExport = URL.toLowerCase();
    return toExport.replaceAll(" ", "-");
};

export const formatFromURL = (URL) => {
    const toExport = URL.replaceAll("-", " ");
    return capitalizeEveryWord(toExport);
};
