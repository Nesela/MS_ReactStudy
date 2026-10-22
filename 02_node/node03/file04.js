const fs = require("fs/promises");

async function writeFile() {

    try {

        await fs.writeFile("./data02.txt", "여기에 쓰는거 맞나요")

    } catch(err) {
        console.log(err);
    }
}

writeFile();