function capitalizeEveryWord(str) {
    const words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
}
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
