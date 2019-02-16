window.addEventListener("load",init);

const fn = initCount();
const loadCount = ()=>document.querySelector("#id").innerText=fn();

function init(){
    loadCount();
    var div = document.querySelector("#sortDiv");
    div.className = "hide";
    displayCount();
    bindEvents();
    loadFromServer();
}
const deleteRecords=()=>
    printRecords(questionOperations.deleteRecords());
   

function printRecords(questions){
    document.querySelector("#questions").innerHTML = "";
    questions.forEach(question=>print(question));
    displayCount();
}
function showHide(){
    var div = document.querySelector("#sortDiv");
    div.classList.toggle("hide");
}
function doSort(){
   var sortBy = this.value; 
   printRecords(questionOperations.sort(sortBy,'A'));
}
function update(){
    for(let key  in questionObject){
        if(key=='id' || key=='markForDelete'){
            
        continue;
        }
       
        questionObject[key] =  document.querySelector("#"+key).value 
    }
    printRecords(questionOperations.questions);
}
function load(){
    if(localStorage){
        if(localStorage.questions){
            var questions = JSON.parse(localStorage.questions);
            questionOperations.questions = questions;
            printRecords(questionOperations.questions);
        }
        else{
            alert("Nothing to Load No Data Found...")
        }
    }
    else{
        alert("Ur Browser is Outdated....");
    }
}
function save(){
    if(localStorage){
        var json = JSON.stringify(questionOperations.questions);
        localStorage.questions = json;
        alert("Data Saved...");
    }
    else{
        alert("Ur Browser is Outdated....");
    }
}
function saveToServer(questionObject){
    var pr = firebase.database().ref('questions/'+questionObject.id).set(questionObject);
    pr.then(res=>{
        alert("Record Saved...");
    }).catch(err=>{
        alert("Record Not Saved");
        console.log("Error is ",err);
    })
}
function bindEvents(){
    document.querySelector("#savetoserver").addEventListener("click",saveToServer);
    document.querySelector("#save").addEventListener("click",save);
    document.querySelector("#load").addEventListener("click",load);
    document.querySelector("#update").addEventListener("click",update);
    document.querySelector("#sortby").addEventListener("change",doSort);
    document.querySelector("#sort").addEventListener("click",showHide);
    document.querySelector("#add").addEventListener("click",addQuestion);
    document.querySelector("#delete").addEventListener("click",deleteRecords);
}

function toggleMark(){
    var questionId = this.getAttribute("qid");
    console.log("Mark Toggle Call ",this.getAttribute("qid"));
    console.log("This is ",this);
    var tr = this.parentNode.parentNode;
    //tr.className = 'alert-danger';
    tr.classList.toggle("alert-danger");
    questionOperations.mark(questionId);
    displayCount();

}
 var questionObject ;
function edit(){
    console.log("Edit Call ",this.getAttribute('qid'));
    var qid = this.getAttribute('qid');
     questionObject = questionOperations.search(qid);
    fillInputs(questionObject);
}
function fillInputs(questionObject){
    for(let key  in questionObject){
        if(key=='id'){
            document.querySelector("#"+key).innerText = questionObject[key];
        continue;
        }
        if(key=='markForDelete'){
            continue;
        }
        document.querySelector("#"+key).value = questionObject[key];
    }
}

function createIcon(className,fn,id){
    var i = document.createElement("i");
    i.addEventListener("click",fn);
    i.className = className;
    i.setAttribute("qid",id);
    return i;
    // <i qid=1 onClick="toggleMark()"" class="fas fa-trash-alt"></i> // this
    // <i class="fas fa-edit"></i>

}
function displayCount(){
document.querySelector("#total").innerText = questionOperations.questions.length;
document.querySelector("#mark").innerText = questionOperations.markCount();
document.querySelector("#unmark").innerText = questionOperations.unMarkCount();
}

function loadFromServer(){
    var questions = firebase.database().ref("questions");
    questions.on('value',(snapshot)=>{
        var objects = snapshot.val();
        console.log("Objects are ",objects);
    })
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
        if(key=='id'){
            questionObject[key] =  document.querySelector("#"+key).innerText ; 
            continue;
        }
       questionObject[key] =  document.querySelector("#"+key).value ;
       console.log("After Add ",questionObject);
      
    }
    loadCount();
    questionOperations.add(questionObject);
    print(questionObject);
    displayCount();
    saveToServer(questionObject);
   // var id = document.querySelector("#id").value;
    //var name = document.querySelector("#name").value;
}
function unHook(){
    document.querySelector("#add").removeEventListener("click");
}