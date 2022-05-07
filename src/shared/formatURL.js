import capitalizeEveryWord from "./capitalizeEveryWord";

export const formatToURL = (URL) => {
    const toExport = URL.toLowerCase();
    return toExport.replaceAll(" ", "-");
};

export const formatFromURL = (URL) => {
    const toExport = URL.replaceAll("-", " ");
    return capitalizeEveryWord(toExport);
};

export const formatToURLItems = (URL) => {
    let newURL = URL;
    if (newURL.indexOf("-") > -1) newURL = newURL.replace("-", "_");

    return newURL.replaceAll(" ", "-");
};

export const formatFromURLItems = (URL) => {
    let toExport = URL;
    toExport = toExport.replaceAll("-", " ");
    toExport = toExport.replaceAll("_", '-');

    return toExport;
};
