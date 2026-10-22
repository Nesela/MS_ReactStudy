const fs = require('fs');

// 동기로 읽겠다.
const data = fs.readFileSync("./data.txt", "utf-8");
console.log(data);
