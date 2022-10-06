let userchoice=0
let compuchoice=0
let totaluser=0
let totalcomp=0
let y=0

let x=document.getElementById("user-score")
x.textContent="User : "+totaluser
window.addEventListener("load", function(e){
    console.log("Hey")
    document.getElementById("playagain").style.visibility="hidden"
})
document.getElementById("playagain").addEventListener("click", function(e){
    location.reload();
})
let rockuser=document.getElementById("rock-user")
rockuser.addEventListener("click", function(e){
    if (totalcomp==5 || totaluser==5 ){
        document.getElementById("rock-user").disabled=true;
        document.getElementById("paper-user").disabled=true;
        document.getElementById("scissors-user").disabled=true;
        document.getElementById("playagain").style.visibility="visible"
        if(totalcomp>totaluser){
            document.getElementById("winner").innerHTML="You win the game"
            
        }
        if(totalcomp=totaluser){
            document.getElementById("winner").innerHTML="The game is tied"
            
        }
        if (totalcomp<totaluser){
            document.getElementById("winner").innerHTML="Computer wins the game"
         
        }
    }
    else{
    
   let uu=document.getElementById("user-select")
   uu.innerHTML="You selected Rock"
   compuchoice=Math.floor(Math.random()*3)
   userchoice=0
   if(compuchoice==0){
    document.getElementById("computer-select").innerHTML="Computer Selected Rock"
    }
    if(compuchoice==1){
        document.getElementById("computer-select").innerHTML="Computer Selected Paper"
        }
    if(compuchoice==2){
        
            document.getElementById("computer-select").innerHTML="Computer Selected Scissors"
        }
        round_winner()
}})
let paperuser=document.getElementById("paper-user")
paperuser.addEventListener("click", function(e){

    if (totalcomp==5 || totaluser==5 ){
        document.getElementById("rock-user").disabled=true;
        document.getElementById("paper-user").disabled=true;
        document.getElementById("scissors-user").disabled=true;
        document.getElementById("playagain").style.visibility="visible"
        if(totalcomp>totaluser){
            document.getElementById("winner").innerHTML="You win the game"
            
        }
        if(totalcomp=totaluser){
            document.getElementById("winner").innerHTML="The game is tied"
            
        }
        if (totalcomp<totaluser){
            document.getElementById("winner").innerHTML="Computer wins the game"
            
        }
    }
    
    else {
   let uiu=document.getElementById("user-select")
   uiu.innerText="You selected Paper"
   userchoice=1
   compuchoice=Math.floor(Math.random()*3)
   if(compuchoice==0){
    document.getElementById("computer-select").innerHTML="Computer Selected Rock"
    }
    if(compuchoice==1){
        document.getElementById("computer-select").innerHTML="Computer Selected Paper"
        }
    if(compuchoice==2){
        
            document.getElementById("computer-select").innerHTML="Computer Selected Scissors"
        }
        round_winner();
}})
let scissoruser=document.getElementById("scissors-user")
scissoruser.addEventListener("click", function(e){
    if (totalcomp==5 || totaluser==5 ){
        document.getElementById("rock-user").disabled=true;
        document.getElementById("paper-user").disabled=true;
        document.getElementById("scissors-user").disabled=true;
        document.getElementById("playagain").style.visibility="visible"
        if(totalcomp>totaluser){
            document.getElementById("winner").innerHTML="You win the game"
     
        }
        if(totalcomp=totaluser){
            document.getElementById("winner").innerHTML="The game is tied"
        }
        if (totalcomp<totaluser){
            document.getElementById("winner").innerHTML="Computer wins the game"
        }
    }
    
    else{
   let uuf=document.getElementById("user-select")
   uuf.innerText="You selected Scissors"
   compuchoice=Math.floor(Math.random()*3)
   userchoice=2
   if(compuchoice==0){
    document.getElementById("computer-select").innerHTML="Computer Selected Rock"
    }
    if(compuchoice==1){
        document.getElementById("computer-select").innerHTML="Computer Selected Paper"
        }
    if(compuchoice==2){
        
            document.getElementById("computer-select").innerHTML="Computer Selected Scissors"
        }
        round_winner();
}})


let z=0
let zz=document.getElementById("computer-score")
zz.innerHTML="Computer : "+ totalcomp


let round_winner=function(){

    
    
    if ((userchoice==0 && compuchoice==2) || (userchoice==1 && compuchoice==0) || (userchoice==2 && compuchoice==1)){
        totaluser+=1;
        document.getElementById("round-score").innerHTML="User Wins"
        x.textContent="User : "+totaluser
        zz.innerHTML="Computer : "+ totalcomp
        if (totalcomp==5 || totaluser==5 ){
            document.getElementById("rock-user").disabled=true;
            document.getElementById("paper-user").disabled=true;
            document.getElementById("scissors-user").disabled=true;
            document.getElementById("playagain").style.visibility="visible"
            if(totalcomp>totaluser){
                document.getElementById("winner").innerHTML="You win the game"
                
            }
            if(totalcomp=totaluser){
                document.getElementById("winner").innerHTML="The game is tied"
            }
            if (totalcomp<totaluser){
                document.getElementById("winner").innerHTML="Computer wins the game"
            }
        }

      }
      else if(userchoice==compuchoice){
        totaluser+=0;
        document.getElementById("round-score").innerHTML="It is a tie"
        x.textContent="User : "+totaluser
        zz.innerHTML="Computer : "+ totalcomp
        if (totalcomp==5 || totaluser==5 ){
            document.getElementById("rock-user").disabled=true;
            document.getElementById("paper-user").disabled=true;
            document.getElementById("scissors-user").disabled=true;
            document.getElementById("playagain").style.visibility="visible"
            if(totalcomp>totaluser){
                document.getElementById("winner").innerHTML="You win the game"
         
            }
            if(totalcomp=totaluser){
                document.getElementById("winner").innerHTML="The game is tied"
            }
            if (totalcomp<totaluser){
                document.getElementById("winner").innerHTML="Computer wins the game"
            }
        }
      }
      else{
        totalcomp+=1;
        document.getElementById("round-score").innerHTML="Computer Wins"
        x.textContent="User : "+totaluser
        zz.innerHTML="Computer : "+ totalcomp
        if (totalcomp==5 || totaluser==5 ){
            document.getElementById("rock-user").disabled=true;
            document.getElementById("paper-user").disabled=true;
            document.getElementById("scissors-user").disabled=true;
            document.getElementById("playagain").style.visibility="visible"
            if(totalcomp>totaluser){
                document.getElementById("winner").innerHTML="You win the game"
         
            }
            if(totalcomp=totaluser){
                document.getElementById("winner").innerHTML="The game is tied"
            }
            if (totalcomp<totaluser){
                document.getElementById("winner").innerHTML="Computer wins the game"
            }
        } a
      }
}



/*const cc = function computerchoice(){
let a = Math.floor(Math.random()*3)
let compc
if (a ==0){
    compc="rock"
}
if (a ==1){
    compc="paper"
}
if (a ==2){
    compc="scissors"
}
return (compc)
}


const rps=function playround(playerSelection, computerSelection){
  computerSelection=cc()
  let r=prompt("Enter your choice")
  r=r.toLowerCase()
  playerSelection=r
  console.log("Computer selects " + computerSelection)
  console.log("Player selects " + playerSelection)
  if ((playerSelection=="rock" && computerSelection=="scissors") ||(playerSelection=="paper" && computerSelection=="rock") || (playerSelection=="scissors" && computerSelection=="paper")){
    return("Player Wins")
  }
  else if(playerSelection==computerSelection){
    return("Tie")
  }
  else{
    return("Computer Wins")
  }
}
let user=0
let comp=0
let tie=0
for(i=0;i<5;i++)
{   
    var fnl = rps()
    console.log(fnl)
    if (fnl== "Player Wins"){
        user+=1
    }
    else if (fnl== "Computer Wins"){
        comp+=1
    }
    else{
        tie+=1
    }
}
if(user>comp && user>tie){
    console.log("Player is the final winner")
}
else if(comp>user && comp>tie){
    console.log("Computer is the final winner")
}
else{
    console.log("Game is Tied")
}*/