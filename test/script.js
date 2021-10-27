console.log('I am in script js')
// globals in node.js
console.log(module)
console.log(__filename)
console.log(__dirname)

//  Path
const path = require('path');
// basename
console.log(path.basename(__filename))
console.log(path.basename(__filename, '.js'))

// dirname
console.log(path.dirname(__filename))
// extname
console.log(path.extname(__filename))
console.log(path.extname('image.jpeg'))

// parse
console.log(path.parse(__filename))

// os 
const os = require('os');
console.log(os.cpus())
console.log(os.freemem())
console.log(os.hostname())
console.log(os.platform())
console.log(os.networkInterfaces());

// File system
const { readFile } = require('fs');
const fs = require('fs');
// same as : const readFile = require('fs').readFile

readFile('./blog.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
readFile('./blog.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log(fs.readFileSync('./blog1.txt', 'utf-8'))
console.log('test')

let text = 'most of yourself by fanning the tiny inner sparks of possibility into flames'
if (fs.existsSync('./blog2.txt')) {
    console.log('The blog2 exists.');
    // write code here
    fs.writeFile('./blog2.txt', text, 'utf-8', (err) => {
        console.log(err)
        fs.readFile('./blog2.txt', 'utf-8', (err, data) => {
            console.log('Read after is written: ', data)
        })
    })
    fs.readFile('./blog2.txt', 'utf-8', (err, data) => {
        console.log('Read what is written: ', data)
    })
} else {
    console.log('blog2 dont exists.')

    fs.writeFile('./blog2.txt', text, 'utf-8', (err) => {
        console.log(err)
    })
}
let newText = 'Some new Text'
fs.appendFile('./blog2.txt', newText, 'utf-8', (err) => {
    console.log(err)
})

const filepath = path.resolve(__dirname, 'blog.txt');

(async () => {
    const data = await fs.promises.readFile(filepath, 'utf8');
    console.log(data);
})();