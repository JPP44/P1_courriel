// Global variables
let textBar = document.querySelector('#textBar');
let myName = 'unknown';

// Event handlers
document.getElementsByTagName("body")[0].onload = function() {setupName()};
document.getElementById("btnSend").onclick = function() {sendMessage()};
textBar.addEventListener("keyup", function(event) {
    // Check if the enter key is pressed in th field
    if (event.key === "Enter") {
      sendMessage();
    }
}); 

// functions
function setupName() {
    myName = localStorage.getItem('myName')
    if(!myName){
        myName = prompt("Enter your name:","name");
        if (myName == null || myName == "") {
            if(!confirm("No name was entered.\nWas no name desired?")) {
                setupName();
            }
            else {
                myName = 'unknown';
            }
        }
        else {
            localStorage.setItem('myName',myName);
        }
    }
}

function loadMessages(){
    formatMessage(1,"test");
}

function loadRecepients(){
    document.getElementById("btnSend").onclick = function() {sendMessage()};
}

/*
    localStorage 
    All the chats will follow this convention
    chat*[0,9] which will match user*[0,9]
    chat will contain the entire history using the null(\0) character to seperate eachEntry 
    Entry formatting typeMessage\0Msg\0 next
*/
function sendMessage() {
    if (!(textBar.value === '')) {
        console.log(textBar.value);
        // send to recepient (TO-DO) maybe add a check for reception
        let date = new Date();
        //Presentation
        let msg = myName +' | '+ date.getDay().toString() + '/' +  date.getMonth().toString() + '/' + date.getFullYear().toString() +" "+
        date.getHours().toString() + ':' + date.getMinutes().toString() + ':' + date.getSeconds().toString() + "<br>" + textBar.value;
        msg.replace(/\0/g,'');
        formatMessage(0,msg);
        textBar.value = '';
        // Save to localStorage


    }
    /*else {
        alert("Nothing was written!");
    }*/
}

function receiveMessage() {
    // decode 
    const recMsg = "sup"; // temporary
    // Presentation
    formatMessage(1,recMsg);
    // Save to localStorage
}


function formatMessage(msgType,msgData) {
    var newElement = document.createElement("p");
    const types = ["myMessage","otherMessage"]
    newElement.className = types[msgType];
    newElement.innerHTML = msgData
    document.getElementById("chatBox").appendChild(newElement);
}

function userAdd () {
    
}






