console.clear();
// const { userOne, userTwo } = require('./testFolder');
// console.log("Result:", userTwo);

const fs = require('fs').promises;
// fs.appendFile('testFolder/index.js', '// пробую добавить строку в файл');
// fs.readFile('testFolder/index.js').then(data => console.log(data.toString()));
const path = require('path');
const allPath = path.join(__dirname, "testFolder");
console.log('allPath:', allPath);

fs.readdir(allPath)
  .then(files => {
    return Promise.all(
      files.map(async filename => {
        const stats = await fs.stat(filename);
        return {
          Name: filename,
          Size: stats.size,
          Date: stats.mtime,
        }; 
      }),
    );
  })
  .then(result => console.table(result));