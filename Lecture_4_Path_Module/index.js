// console.log("path module")

import path from 'path'
//join two or more files
const fullpath = path.join ('/path','index.py','test.java')
//index.py , test.java4

// console.log ("file join =", fullpath);

//absolute path
const absolutepath =path.resolve();

// console.log("we are working currently path =",absolutepath)

// extention;
const extname =path.extname ("resume.pdf")

console.log ("extname =", extname);

if (extname== '.pdf'){
    console.log ("ok")
}
else{
    console.log ("not supported")
}