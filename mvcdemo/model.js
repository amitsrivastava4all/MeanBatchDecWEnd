app.factory('calcfactory',()=>{
    const object = {
        add(firstNumber, secondNumber){
            return parseInt(firstNumber) + parseInt(secondNumber);
        }
    };
    return object;
    // return {};
});