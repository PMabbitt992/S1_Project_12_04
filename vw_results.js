"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Paige Mabbitt
   Date: 3.1.19  
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/





/* Callback Function to calculate an array sum */
function calcSum(value) {
    totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
    return (100 * value / sum);
}

// variable reportHTML equals an h1 heading with the race title inside
var reportHTML = "<h1>" + raceTitle + "</h1>";

//for loop that for each value in the race array, it will count up the amount of total votes and write the race name, and candidateRows (candidate votes, party, vote percentage, and total votes) to an HTML table
for (var i = 0; i < race.length; i++) {
    var totalVotes = 0;
    votes[i].forEach(function calcSum(value) {
        totalVotes += value;
    });
    reportHTML += "<table> <caption>" + race[i] + "</caption> <tr><th>Candidate</th><th>Votes</th></tr>";
    reportHTML += candidateRows([i], totalVotes);
    reportHTML += "</table>";
}
// input reportHTML to the section
document.getElementsByTagName("section")[0].innerHTML = reportHTML;

//function that returns the candidate name, party, and amount of votes and percent of votes for each candidate and array, then assigns it withing html code to be inserted into the html file
function candidateRows(raceNum, totalVotes) {
    var rowHTML = " ";
    for (var j = 0; j <= 2; j++) {
        var candidateName = candidate[raceNum][j];
        var candidateParty = party[raceNum][j];
        var candidateVotes = votes[raceNum][j];
        var candidatePercent = calcPercent(candidateVotes, totalVotes);
        rowHTML += "<tr> <td>" + candidateName + "(" + candidateParty + ")</td> <td>" + candidateVotes.toLocaleString() + "(" + candidatePercent.toFixed(1) + "%)</td>";
        for (var k = 0; k < candidatePercent.toFixed(1); k++) {
            rowHTML += createBar(candidateParty, candidatePercent);
        }
        rowHTML += "</tr>";
    }
    return rowHTML;
}

// function that chooses a color for the bar base on the party of the candidate
function createBar(partyType) {
    var barHTML = " ";
    switch (partyType) {
        case partyType = "D":
            barHTML = "<td class='dem'></td>"
            break;
        case partyType = "R":
            barHTML = "<td class='rep'></td>"
            break;
        case partyType = "I":
            barHTML = "<td class='ind'></td>"
            break;
    }
    return barHTML;

}