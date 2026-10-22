const path = require('path');

/*
    window : 경로\경로
    mac | linux : 경로/경로
*/

const filePath = path.join(__dirname, 'data', 'config.json');

console.log(filePath);

console.log(path.join("data", "config.json"));
console.log(path.basename("data/config.json"));
console.log(path.dirname("data/config.json"));
console.log(path.extname("data/config.json"));
console.log(path.resolve("data", "config.json"));