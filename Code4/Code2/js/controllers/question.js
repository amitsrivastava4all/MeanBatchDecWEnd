window.addEventListener("load",bindEvents);
function bindEvents(){
    document.querySelector("#add").addEventListener("click",addQuestion);
}
function addQuestion(){
    var questionObject = new Question();
    for(let key in questionObject){
       questionObject[key] =  document.querySelector("#"+key).value ;
    }
   // var id = document.querySelector("#id").value;
    //var name = document.querySelector("#name").value;
}
function unHook(){
    document.querySelector("#add").removeEventListener("click");
}