const fs = require("fs/promises");

// async await
async function readFile() {
    try {

        const data = await fs.readFile("./data01.txt", "utf-8");
        console.log(data);
    }catch (err) {
        console.log(err);
    }
}

readFile();