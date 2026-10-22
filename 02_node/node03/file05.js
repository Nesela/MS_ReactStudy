const fs = require("fs/promises");

async function readJson() {

    try  {
        const data = await fs.readFile("./data.json", "utf-8");

        const json = JSON.parse(data);
        console.log(json);

        console.log(json.name);
        console.log(json.skills);

    } catch(err) {
        console.error(err);
    }
}

readJson();