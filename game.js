function checkInput(){
    let x = document.getElementById("call").value.toLowerCase();
     let c= checkOutput();
     if(x==c)
     {
       document.getElementById("output").innerHTML="DRAW"; 
     }
     
      else if(x=="rock"&& c=="scissors")
     {
            document.getElementById("output").innerHTML="YOU WIN";
     }
     else if(x=="rock"&& c=="paper")
        {
               document.getElementById("output").innerHTML="YOU Lose";
        } 
    else if(x=="paper"&& c=="scissors")
        {
           document.getElementById("output").innerHTML="YOU LOSE";
        }
     else if(x=="paper"&& c=="rock")
        {
               document.getElementById("output").innerHTML="YOU WIN";
        }
        else if(x=="scissors" && c=="paper")
            {
                   document.getElementById("output").innerHTML="YOU WIN";
            }
         else if(x=="scissors" && c=="rock")
            {  
                document.getElementById("output").innerHTML="YOU LOSE";
            }
            else {
                document.getElementById("output").innerHTML = "Invalid input! Please enter rock, paper, or scissorss.";
            }
}

function checkOutput() {
    let b = Math.random();  

    if (b < 0.33) {
      choice="rock"
      document.getElementById("picture").src="rock.jpg";
    } 
    else if (b < 0.66) {  
       choice = "scissors"
       document.getElementById("picture").src="scissor.jpg";
    }
    else {
        choice = "paper"
        document.getElementById("picture").src="paper1.jpg";
       
    }

    document.getElementById("picture").style.display="block";
    return choice;
}




  






