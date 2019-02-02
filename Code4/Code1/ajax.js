function work(){
    for(let i = 1; i<=10; i++){
        window.console.log(' I am Not Waiting I will do my Stuff',i);
    }
}
function doAjax(){
   
    var playerId = document.querySelector("#playerid").value;
    //const url = 'http://cricapi.com/api/playerStats?pid='+playerId+'&apikey=A8zoDoPaQgefmB7KunnSuApSgL73';
    const url = `http://cricapi.com/api/playerStats?pid=${playerId}&apikey=A8zoDoPaQgefmB7KunnSuApSgL73`;
    console.log("Player id ",playerId);
    console.log("Url is ",url);
   // try{
    //var promise  = fetch(url);
    fetch(url).then(response=>{
        response.json().then(playerObject=>{
            console.log("Data is ",playerObject);
            document.querySelector("#name").innerText = playerObject.fullName;
            document.querySelector("#born").innerText = playerObject.born;
            document.querySelector("#playerimg").src=playerObject.imageURL;
        }).catch(e=>{
            console.log("JSON Parse Error ",e);
        }).catch(err=>{
            console.log("Server Error ",err);
        })
    })
   // console.log("Promise is ",promise);
 //   }
   /* catch(e){

    }*/
    work();
    //promise.then(success).catch(fail);
    
}
/*
function failJSON(err){
    console.log("JSON Convert Fail ",err)
}
function successJSON(data){
    console.log("Data is ",data);
}
function success(response){  
    console.log("Response is ",response);
    var pr = response.json();
    pr.then(successJSON).catch(failJSON);
}
function fail(err){
    console.log("Fail is ",err);
}*/







