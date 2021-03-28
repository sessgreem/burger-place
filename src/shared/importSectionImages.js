import capitalizeEveryWord from "./capitalizeEveryWord.js";

function importSectionImages(r) {
    const fileNames = [];
    r.keys().forEach((key) => {
        const fileName = key
            .split("./")
            .pop()
            .substring(0, key.length - 6)
            .replaceAll("-", " ");
        fileNames.push(capitalizeEveryWord(fileName));
    });
    const contextModule = r.keys().map(r);
    return [contextModule, fileNames];
}

export default importSectionImages;
