const cc = function computerchoice(){
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
}