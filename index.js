const inputForm=document.querySelector(".input__contents");
const input=document.querySelector("input");
const button=document.getElementsByClassName("submit")[0];
const WhatYouGot=document.getElementsByClassName("value")[0];
const list=document.getElementsByClassName("arrayList")[0];
const anonymous=document.getElementsByClassName("anonymous")[0];
const rinaPic=document.getElementsByClassName("rinaLocation")[0];
let inputArray=[];
checkBoolean=false;

function handleAnonymous(event){
    console.log(1);
}
function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    list.removeChild(li);
    const cleanToDos = inputArray.filter(function(contents) {
      return contents.id !== li.id;
    });
    inputArray = cleanToDos;
   
  }

function handleCheckButton(){
    checking=anonymous.checked;
    console.log(checking);
    if(checking){
        input.type="password";
        input.style="ime-mode:auto";
        checkBoolean=true;
    }else{
        input.type="text";
        checkBoolean=false;
    }
}
function handleInput(event){
    event.preventDefault();
    const potato=document.createElement("li");
    const delBtn=document.createElement("button");
    delBtn.innerText="X";
    delBtn.addEventListener("click",deleteToDo);
    const span=document.createElement("span");
    const newId=inputArray.length+1;
    if(checkBoolean){
        span.innerText="*****";
    }else{
        span.innerText=input.value;
    }
    potato.appendChild(span);
    potato.appendChild(delBtn);
    list.appendChild(potato);
    potato.id=newId;
    const toDoObj={
        text:input.value,
        id:potato.id,
    };
    inputArray.push(toDoObj);
    inputForm.reset();
}

function handleButton(event){
    if(inputArray.length>1){
        console.log(inputArray.length);
        const ranNumber=Math.floor(Math.random()*(inputArray.length-1+1));
        WhatYouGot.innerText=inputArray[ranNumber].text;
    }else{
        alert("please insert more than 1.");
    }
}

if(button){
    button.addEventListener("click",handleButton);
}
inputForm.addEventListener("submit",handleInput);
anonymous.addEventListener("click",handleCheckButton)

