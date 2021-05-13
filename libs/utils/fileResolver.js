const { readFileSync } = require("fs");

const toBuffer = (d) => {
    const { buffer } = d;

    if (buffer) return buffer;

    const file = readFileSync(d);
    if (file) return file.buffer;

    throw 'Define correct file or path to it';
}

const isPath = d => typeof d === 'string';

const isFile = (f) => typeof f === 'object';

const getFileContent = file => {
    let fileContent;

    if (isPath(file)) fileContent = readFileSync(file);
    if (isFile(file)) fileContent = file;

    return fileContent;
} 

module.exports = {
    toBuffer,
    getFileContent,
}