// function add(x=0, y = 0){
//     return x + y;
// }
// module.exports.addition = add;
// module.exports.sub= (x=0,y=0)=>x-y;
const calcObj = {
    add(x=0, y = 0){
        return x + y;
    },
    sub(x=0, y =0){
        return x - y;
    }
}
module.exports = calcObj;