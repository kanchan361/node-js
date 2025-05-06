//console.log("hello world");
//modules
//path => directory path
//os   => information
//http => serer
//fs   => file system

//folder creation
/*const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'test'), function(err) {
    if (err) throw err;
    else console.log("Folder is created successfully");
});*/


// create and write file
/*const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, "test", "hello.txt"), "hello world abc", function(err) {
    if (err) throw err;
    else console.log('File is created successfully');
});
*/



/*const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname, "test", "hello.txt"),"utf-8", function(err,data){
    if(err) throw err
    else console.log(data)
})*/


//rename file

/*const fs = require('fs');
const path = require('path');
fs.rename(path.join(__dirname, "test", "hello.txt"), path.join
(__dirname, "test", "bye.txt"), function(err){
    if (err) throw err
    console.log("file is renamed")
})*/



//delete file
/*const fs = require('fs');
const path = require('path');

fs.unlink(path.join(__dirname, "test", "bye.txt"), function(err) {
    if (err) throw err;
    console.log("file is deleted");
});*/






