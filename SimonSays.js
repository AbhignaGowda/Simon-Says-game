let gameSeq=[];
let userSeq=[];


let btns=["yellow","red","purple","green"];
let started=false;
let level=0;

let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;

        levelup();
    }
    h3.classList.remove("warning");

});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}
function UserFlash(btn){
    btn.classList.add("user-flash");
    setTimeout(function(){
        btn.classList.remove("user-flash");
    },250);

}
function levelup(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);

}
function checkAns(idx){

    if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(levelup(),2000);
    }
    }else{
        
        h3.classList.add("warning");
        h3.innerHTML=`Game over! your score was ${level} .press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        let heighScore=level;
        if(level>heighScore){
            h3.innerHTML=`Game over! your score was ${level} .Congrats you made a heigh-score.press any key to start`;
    
        }
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },150)
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn=this;
    UserFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click",btnPress);
 }
 function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
    

 }