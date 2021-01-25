const testFolder = './data/';
const fs = require('fs');

// ./ : 현재 directory
// ../ : 상위 directory

/**
    fs.readdir(testFolder, (err, files) => {
       files.forEach(file => {
            console.log(file);
        });
    });
 */

fs.readdir(testFolder, function(error, filelist) {
    console.log(filelist);
});

