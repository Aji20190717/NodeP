// const = 상수형 변수
var fs = require('fs');

fs.readFile('sample.txt', 'utf8', function(err, data) {
    console.log(data);
});

