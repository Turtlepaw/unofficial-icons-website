const fs = require("fs");

const Files = fs.readdirSync('./Pepperbot/wwwroot/img');
const FileArr = [];


for (const file of Files) {
    const FileName = file.replace(".svg", "").replace(".png", "");
    const FileType = file.slice(file.indexOf("."), file.length);

    FileArr.push({
        name: FileName,
        type: FileType
    });
}

fs.writeFileSync("./Pepperbot/wwwroot/img/data.json", JSON.stringify(FileArr))
