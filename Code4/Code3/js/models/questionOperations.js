const questionOperations = {
questions:[],
add(question){
    this.questions.push(question);
},
delete(){

},
mark(id){
var question = this.questions.find(questionObject =>questionObject.id==id);
question.markForDelete = !question.markForDelete;
},
update(){

},
search(){

},
sort(){

}
}