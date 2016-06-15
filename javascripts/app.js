
	var mycounter = 0;
	var comcounter = 0;
	var ties = 0;
	var percent = 0;

function getChoice(element)
{

	var arr = ["rock", "paper", "scissors"];
	var rand = arr.sample();
	console.log(rand);

 	var choice;
 	var value = element.getAttribute("value")
 	console.log(value);
 	if(value === "rock") {
 		choice = "rock";
 	} else if(value === "paper") {
 		choice = "paper";
 	} else {
 		choice = "scissors";
 	}


	var res = document.getElementById("answer");
	var wins_u = document.getElementById("you");
	var wins_com = document.getElementById("computer");
	var wins_ties = document.getElementById("ties");
  var wins_percent = document.getElementById("percentage");

	wins_u.innerHTML = "you: " + mycounter;
	wins_com.innerHTML = "computer: " + comcounter;
	wins_ties.innerHTML = "Ties: " + ties;
	wins_percent.innerHTML = "Win percentage: " + per;

			if(choice == rand)
			{
				 res.innerHTML = "your choice: " + choice + " computer choice: " + rand;				
				 alert('tie');
				 ties++;
				 wins_ties.innerHTML = "Ties: " + ties;
			}
			else
			{

				//ALL ROCK LOGIC

				 if(choice == "rock" && rand == "scissors")
				 {
				 	 res.innerHTML = "your choice: " + choice + " My choice: " + rand;
				 	 alert('win!');
				 	 mycounter++;
				 	 wins_u.innerHTML = "you: " + mycounter;
				 }
				 else if(choice == "rock" && rand == "paper")
				 {
				 	 res.innerHTML = "your choice: " + choice + " My choice: " + rand;
				 	 alert('lose!');
				 	 comcounter++;
				 	 wins_com.innerHTML = "computer: " + comcounter;
				 }
				 
				 //ALL SCISSORS LOGIC

				 else if(choice == "scissors" && rand == "paper")
				 {
				 	 res.innerHTML = "your choice: " + choice + " computer choice: " + rand;
				 	 alert('win!');
				 	 mycounter++;
				 	 wins_u.innerHTML = "you: " + mycounter;
				 }
				 else if(choice == "scissors" && rand == "rock")
				 {
				 	 res.innerHTML = "your choice: " + choice + " computer choice: " + rand;
				 	 alert('lose!');
				 	 comcounter++;
				 	 wins_com.innerHTML = "computer: " + comcounter;
				 }

				 //ALL PAPER LOGIC

				 else if(choice == "paper" && rand == "rock")
				 {
				 	 res.innerHTML = "your choice: " + choice + " computer choice: " + rand;
				 	 alert('win!');
				 	 mycounter++;
				 	 wins_u.innerHTML = "you: " + mycounter;
				 }
				 else if(choice == "paper" && rand == "scissors")
				 {
				 	 res.innerHTML = "your choice: " + choice + " computer choice: " + rand;
				 	 alert('lose!');
				 	 comcounter++;
				 	 wins_com.innerHTML = "computer: " + comcounter;
				 }
				 else
				 {
				 	 	res.innerHTML = "invalid Entry";

				 }
			}

	console.log(mycounter);
	console.log(comcounter);

	var total = mycounter + comcounter + ties;
	var per = mycounter/total;

	wins_percent.innerHTML = "Win percentage: " + per;
}



Array.prototype.sample = function () {
   return this[Math.floor(Math.random() * this.length)];
};