window.addEventListener("load",bindEvents);
function bindEvents(){
    document.getElementById("compute").addEventListener("click",computeSalary);
    document.querySelector("#exp").addEventListener("change",expressionEval);
}
function expressionEval(){
    console.log("Change call");
    var expression = document.querySelector("#exp").value;
    document.querySelector("#exp").value = eval(expression);
}
function computeSalary(){
    var basicSalary = parseInt(document.getElementById("basicsalary").value);
    console.log("Inside Compute Salary ",basicSalary);
    salaryOperations.takeSalary(basicSalary);
    printSalaryDetails();
    // var hra = salaryOperations.hra();
    // document.getElementById("hra").innerText = hra;
    // console.log("Hra is ",hra);
}
function createPTag(key, value){
    var div = document.getElementById("output");
    var p = document.createElement("p");
    p.innerHTML ="<b>"+ key +" is "+value+"</b>";
    div.appendChild(p);
}

function printSalaryDetails(){
    var div = document.getElementById("output");
    div.innerHTML = "";
for(let key in salaryOperations){
    if(key=='basicSalary' || key=='takeSalary'){
        continue;
    }
    var value = salaryOperations[key]();
    createPTag(key, value);
}
}