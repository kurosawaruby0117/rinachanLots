const inputForm=document.querySelector(".input__contents");
const input=document.querySelector("input");
const button=document.getElementsByClassName("submit")[0];
const WhatYouGot=document.getElementsByClassName("value")[0];
const list=document.getElementsByClassName("arrayList")[0];

let inputArray=[];

function handleInput(event){
    event.preventDefault();
    
    console.log(inputArray.length);
    const potato=document.createElement("li");
    const delBtn=document.createElement("button");
    delBtn.innerText="X";
    const span=document.createElement("span");
    const newId=inputArray.length+1;
    span.innerText=input.value;
    console.log(input.value);
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
    console.log(inputArray[0]);
    if(inputArray.length>1){
        console.log("1");
        const ranNumber=Math.floor(Math.random()*(inputArray.length-1+1))+1;
        console.log(inputArray[ranNumber].text)
        WhatYouGot.innerText=inputArray[ranNumber].text;
    }
}

if(button){

    button.addEventListener("click",handleButton);
}
if(inputForm){
    inputForm.addEventListener("submit",handleInput);
}

