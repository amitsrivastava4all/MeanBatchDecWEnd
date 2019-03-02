const calc = {
    add(x,y){
        return x + y;
    },
    subtract(x,y){
        const sub = require("./sub");
        return sub(x,y);
    }
}
module.exports = calc;