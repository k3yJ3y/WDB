const fs = require('fs');
// console.log(fs);
const folderName = process.argv[2] || 'Project';
 
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.group("in the callback")
//     if (err) throw err;
// });

// fs.mkdirSync('Cats');

// console.log("I come after MKDIR!")
try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/app.css`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
} catch (err){
    console.log(err);
}

