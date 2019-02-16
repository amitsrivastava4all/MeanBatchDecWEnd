// var counter = 1;
// const doCount=()=>counter++;

function initCount(){
    var counter = 1;
    function increaseCount(){
        return counter++;
    }
    return increaseCount;
    }
    