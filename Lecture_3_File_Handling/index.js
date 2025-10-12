import { readFile,writeFile,appendFile, mkdir } from 'fs/promises'

//readfile Content

const read_file = async (fileName) => {
    const data = await readFile(fileName, 'utf-8')
    console.log(data);
};

// read_file('Sample.txt ')

//createfile

const create_file = async (fileName, Content) => {
 await writeFile (fileName,Content)
 console.log("file create sucessfully..!");

}


// create_file('ai.dart', 'this is testing file')


//add content to file


const append_file = async (fileName, Content) => {
 await appendFile (fileName,Content)

 console.log("extra content sucessfully");

}
// appendFile('ai.py', "this is paython file updated")

// create folder - directory



const create_dir= async (dir) => {

    await mkdir(dir,{recursive:true})

}

create_dir ('src/py')

//src/components/java
