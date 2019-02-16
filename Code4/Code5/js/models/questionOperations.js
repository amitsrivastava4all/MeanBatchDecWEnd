const questionOperations = {
questions:[],
add(question){
    this.questions.push(question);
},
sort(key,order){
    if(key=='id' || key=='score'){
    if(order=='a' || order=='A'){
        return this.questions.sort((first, second)=>first[key]-second[key])
    }
    else{
        return this.questions.sort((first, second)=>second[key]-first[key]) 
    }
    }
    else{
        if(order=='a' || order=='A'){
            return this.questions.sort((first, second)=>first[key].localeCompare(second[key]));
        }
        else{
            return this.questions.sort((first, second)=>second[key].localeCompare(first[key])); 
        } 
    }
},

deleteRecords(){
    return this.questions = this.questions.filter(question=>!question.markForDelete);
},
unMarkCount(){
    return this.questions.length - this.markCount();
},
markCount(){
    return this.questions.filter(questionObject=>questionObject.markForDelete).length;
},
mark(id){
var question = this.search(id);
question.markForDelete = !question.markForDelete;
},
update(){

},
search(id){
    return this.questions.find(questionObject =>questionObject.id==id);
}
}