$(document).ready(function () {

// Define all variables

    var wins = 0; // Number of wins 
	var losses = 0; //Number of losses

    var sumCrystal = 0; // Total sum of crystals clicked
	var targetNumber = 0; // Target number
	
	// Numbers for each crystal color
    var redNumber= 0;
	var greenNumber = 0;
	var blueNumber = 0;
	var yellowNumber = 0;

	// Switch case placeholder
	var crystalClick = "";

// Generate random number for each crystal
	redNumber = Math.floor(Math.random() * 12) + 1;
	blueNumber = Math.floor(Math.random() * 12) + 1;
	greenNumber = Math.floor(Math.random() * 12) + 1;
	yellowNumber = Math.floor(Math.random() * 12) + 1;

// Generate random target number and write it to HTML ID
	targetNumber = Math.floor(Math.random() * 102) + 19;
	$("#target").html("Target Number: "+targetNumber.toString());

// Resets game by resetting all variables = to 0
    function gameReset() { // Begin gameReset function
	    redNumber = 0;
		greenNumber = 0;
		blueNumber = 0;
		yellowNumber = 0;
		sumCrystal = 0;
		crystalClick = "";
		sumCrystal = 0;

//	Generate random number from 1-12 for all crystals
	redNumber = Math.floor(Math.random() * 12) + 1;
	blueNumber = Math.floor(Math.random() * 12) + 1;
	greenNumber = Math.floor(Math.random() * 12) + 1;
	yellowNumber = Math.floor(Math.random() * 12) + 1;

// Display player total on HTML as sum of all crystals
	$("#total").html("Total: "+sumCrystal.toString());


// Display target number on HTML
    targetNumber = Math.floor(Math.random() * 102) + 19;
    $("#target").html("Target Number: "+targetNumber.toString());
    } // End gameReset function

// Event listerner for clicks on crystal class and get the sum of the total values

	$(".crystal").on('click', function() { // Begin click function
	crystalClick = $(this).attr('id'); 
	    switch (crystalClick) {
			case "red":
			   sumCrystal += redNumber;
			   break;
			case "green":
			   sumCrystal += greenNumber;
			   break;
			case "blue":
			   sumCrystal += blueNumber;
			  break;
			case "yellow":
			   sumCrystal += yellowNumber;
			   break;
		}; // End click function

// Write the sum of the crystal values to the HTML document
	$("#total").html("Total: "+sumCrystal.toString());

//Check win conditions.  If sum is greater than target, player loses.  If sum is equal to target, playuer wins.
	if (sumCrystal === targetNumber) {
		wins++;
		alert("You won!! Try again!!")
		gameReset();
		$("#wins").html("Wins: " + wins.toString());
	}
	
    else if (sumCrystal > targetNumber) {
        losses++;
        	alert("You lost!! Try again");
        	gameReset();
			$("#losses").html("Losses: " + losses.toString());
			
		} 
    });

});
