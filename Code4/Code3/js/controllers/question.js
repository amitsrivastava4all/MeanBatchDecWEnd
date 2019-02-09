window.addEventListener("load",init);

function init(){
    displayCount();
    bindEvents();
}
function bindEvents(){
    document.querySelector("#add").addEventListener("click",addQuestion);
}

function toggleMark(){
    var questionId = this.getAttribute("qid");
    console.log("Mark Toggle Call ",this.getAttribute("qid"));
    console.log("This is ",this);
    var tr = this.parentNode.parentNode;
    //tr.className = 'alert-danger';
    tr.classList.toggle("alert-danger");

}

function edit(){
    console.log("Edit Call")
}

function createIcon(className,fn,id){
    var i = document.createElement("i");
    i.addEventListener("click",fn);
    i.className = className;
    i.setAttribute("qid",id);
    return i;
    // <i class="fas fa-trash-alt"></i>
    // <i class="fas fa-edit"></i>

}
function displayCount(){
document.querySelector("#total").innerText = questionOperations.questions.length;
document.querySelector("#mark").innerText = 0;
document.querySelector("#unmark").innerText = 0;
}


function print(question){
    var index = 0;
    var tbody = document.querySelector("#questions");
    var tr = tbody.insertRow();
    for(let key in question){
        if(key=='markForDelete'){
            continue;
        }
        tr.insertCell(index).innerText = question[key];
        index++;
    }
   var td =  tr.insertCell(index);
   td.appendChild(createIcon('fas fa-trash-alt mr-2',toggleMark,question.id));
   td.appendChild(createIcon('fas fa-edit',edit,question.id));
}

function addQuestion(){
    var questionObject = new Question();
    for(let key in questionObject){
        if(key=='markForDelete'){
            continue;
        }
       questionObject[key] =  document.querySelector("#"+key).value ;
       console.log("After Add ",questionObject);
    }
    questionOperations.add(questionObject);
    print(questionObject);
    displayCount();
   // var id = document.querySelector("#id").value;
    //var name = document.querySelector("#name").value;
}
function unHook(){
    document.querySelector("#add").removeEventListener("click");
}