//Guess the number 


let a = Math.random()*100;
a = Number.parseInt(a)
let inp;
let score = 100;

while (inp != a){
  score = score - 1;
  inp = prompt("Enter the number")

  if(inp==a){
    console.log("Congratulations!!  You guess the correct number")
    console.log(`you guess the actual nmuber in ${100 - score}  chances.`)
    
  }
  else if (inp >a && inp<100){
    console.log("Your Number is Greater than actual Number.")
  }
  else if (inp<a && inp>0){
    console.log("Your number is smaller than actual Number.")
  }
  else{
    console.log("Enter Number Between 1 to 100 !")
  }

}

  console.log("Your score is ", score)
