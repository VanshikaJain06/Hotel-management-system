const {readFileSync}=require('fs');
var load=()=>JSON.parse(readFileSync('student.json'))
module.exports={load};