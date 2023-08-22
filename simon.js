let gameseq=[];
let userseq=[];

let btns= ["yellow","red","purple","green"];

let started=false;
let level=0;
let highestScore=0;

let h2=document.querySelector("h2");
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");

function highscore(){
    
    if(level>highestScore){
        level=highestScore;
        localStorage.setItem('highestScore',highestScore);
    }
    
    
}

window.onload=function(){
    highestScore=parseInt(localStorage.getItem('highestScore')) || 0;
    document.getElementById("highest-score").innerText=` Highest Score is ${highestScore}`
}

document.addEventListener("keypress",function(){
    if(started == false){         //ONLY WHEN GAME NOT STARTED
        console.log("Game is started");
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");    //1sec bad flash band ho jayega
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");    //1sec bad flash band ho jayega
    },250);
}

function levelUp(){
    userseq=[];     //Major Change- Jayse hi level bade matlab usersq empty aur phir starting se value enter
    level++;
    console.log(level);
   

    h2.innerText=`Level ${level}`;
    
    
    


    let randIdx=Math.floor(Math.random()*3);        // Generate random number 
    let randColor=btns[randIdx];                    // Access that random number index 
    let randBtn=document.querySelector(`.${randColor}`);     // select that class
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameseq.push(randColor);        // Push random color in gameseq array
    //console.log(gameseq);

    gameFlash(randBtn);      // flash that class

    

   
}


function checkAns(idx){
    // console.log("Curr level:",level);        // Level value is always equal to length of userSeq and gameSeq

            

    
    if(userseq[idx]==gameseq[idx]){         // Check
        // console.log("Same Value");       
        // There are 2 Case Now - If button click is last index of arr then levelUp i.e generate new random color
        
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    
    else{
        h2.innerHTML=`Game Over! Your Score is <b>${level}</b> <br> Press any Key to Start`;
        document.querySelector("body").style.backgroundColor="red";       // To make screen red after wrong press
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";     // To reset color
        },150);

        
        highscore();
        reset();        // So that game start after presses any key after wrong press

        
    }
}



function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");       // fetch id and that id is equal to its color i.e userColor and get store in userColor
    //console.log(userColor);
    userseq.push(userColor);

    checkAns(userseq.length-1);


}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}


