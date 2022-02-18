const { json } = require("express/lib/response");
const { readFileSync } = require("fs");
var load = () => JSON.parse(readFileSync('data.json'));


function filewriter() {
    const fs = require('fs')
    const jsonFile = require("./data.json")

    var newdata = {
        "name": "Navin", "age": 15, "hotel": "Royal stay", "id": 1692   
    }
    jsonFile.push(newdata)

    fs.writeFile('data.json',JSON.stringify(jsonFile),err => {
        if (err) throw err;
        console.log("Written");
    })
}

module.exports = { load };
module.exports.filewriter = filewriter;