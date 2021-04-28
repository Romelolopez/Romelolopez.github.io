//Selectors
var tableRow = document.getElementsByTagName("tr");
var tableCell = document.getElementsByTagName("td");
var tableSlot = document.querySelectorAll(".slot");
const playerTurn = document.getElementById("player-turn");
var redC = document.getElementById("redC")
var yellowC = document.getElementById("yellowC")
var currentPlayer = 1;
var player1Color = "red";
var player2Color = "yellow";
var highlight = true;
var counterRed = 0
var counterYellow = 0


//while player1 is empty
while(!player1){
    var player1 = prompt("Player One: You will be red");
    redC.innerHTML = `${player1}: ${counterRed}`
}


//while player2 is empty
while(!player2){
    var player2 = prompt("Player Two: You will be Yellow");
    yellowC.innerHTML = `${player2}: ${counterYellow}`
}

//Change the default text of player
playerTurn.textContent = `${player1}'s turn`

function reset(){
    //Checks each td/everything with class slot. tableSlot is defined on line 4
    tableSlot.forEach((slot) => {
        slot.style.backgroundColor = 'white';
    });
return (currentPlayer === 1 ? playerTurn.textContent = `${player1}'s turn` : playerTurn.textContent = `${player2}'s turn`);
}

function btn(){
    tableSlot.forEach((slot) => {
        slot.style.backgroundColor = 'white';
    });
    playerTurn.style.color = 'black';
        currentPlayer = 1
        counterYellow = 0
        counterRed = 0
        playerTurn.textContent = `${player1}'s turn`
        redC.innerHTML = `${player1}: ${counterRed}`
        yellowC.innerHTML = `${player2}: ${counterYellow}`

}

Array.prototype.forEach.call(tableCell, (cell) =>{
    cell.addEventListener('click', changeColor)
    cell.addEventListener('mouseover', hov)
    cell.addEventListener('mouseout', out)
    cell.style.backgroundColor = 'white'
})

function hov(e){
    let column = e.target.cellIndex;
    for (i = 6; i > -1; i--){
        if (currentPlayer == 1){
            //color has to be different to functions do not read it with the rest of the table
            tableRow[0].children[column].style.backgroundColor = '#fe0000'
            tableRow[0].children[column].style.border = '1px solid black'
            
        } else if (currentPlayer == 2){
            tableRow[0].children[column].style.backgroundColor = '#fdfc00'
            tableRow[0].children[column].style.border = '1px solid black'
        }
    }
}

function out(e){
    let column = e.target.cellIndex;
    for (i = 6; i > -1; i--){
        if (currentPlayer == 1){
            tableRow[0].children[column].style.backgroundColor = 'white'
            tableRow[0].children[column].style.border = 'none'
        }
        else if (currentPlayer == 2){
            tableRow[0].children[column].style.backgroundColor = 'white'
            tableRow[0].children[column].style.border = 'none'
        }
    }
}


function changeColor(e){
    // Get clicked column index
    let column = e.target.cellIndex;
    let row = [];

    for (i = 6; i > 0; i--)
    {
        if (tableRow[i].children[column].style.backgroundColor == 'white')
        {
            row.push(tableRow[i].children[column]);
            if (currentPlayer === 1){
                row[0].style.backgroundColor = 'red';

                tableRow[0].children[column].style.backgroundColor = '#fe0000'
                if (horizontalCheck() ||  verticalCheck() || diagonalCheck() || diagonalCheck2()){
                    playerTurn.textContent = `${player1} WINS!!`;
                    //playerTurn.style.color = player1Color;
                    counterRed = counterRed+1
                    redC.innerHTML = `${player1}: ${counterRed}`
                    row[0].style.backgroundColor = 'red';
                    reset()
                    
                    return alert(`${player1} WINS!!`);
                }else if (drawCheck()){
                    playerTurn.textContent = 'DRAW!';
                    reset()
                    return alert('DRAW!');
                }else{
                    playerTurn.textContent = `${player2}'s turn`
                    tableRow[0].children[column].style.backgroundColor = '#fdfc00'
                    return currentPlayer = 2;
                }
            }else{
                row[0].style.backgroundColor = 'yellow';
                
                tableRow[0].children[column].style.backgroundColor = '#fdfc00'
                if (horizontalCheck()  || verticalCheck() || diagonalCheck() || diagonalCheck2()){
                    playerTurn.textContent = `${player2} WINS!!`;
                    //playerTurn.style.color = player2Color;
                    counterYellow = counterYellow+1
                    yellowC.innerHTML = `${player2}: ${counterYellow}`
                    reset()
                    return alert(`${player2} WINS!!`);
                }else if (drawCheck()){
                    playerTurn.textContent = 'DRAW!';
                    reset()
                    return alert('DRAW!');
                }else{
                    playerTurn.textContent = `${player1}'s turn`;
                    tableRow[0].children[column].style.backgroundColor = '#fe0000'
                    return currentPlayer = 1;
                }   
            }   
        }  
    }
}

function colorMatchCheck(one, two, three, four){
    return (one === two && one === three && one === four && one !== 'white' && one !== undefined);
}


function horizontalCheck(){
    //Checks each row individually
    for (let row = 0; row < tableRow.length; row++){
        //check, going through the rows, column by column, if the colors are equal to each other
        for (let col = 0; col < 4; col++){
           if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor,
            tableRow[row].children[col+1].style.backgroundColor, 
            tableRow[row].children[col+2].style.backgroundColor, 
            tableRow[row].children[col+3].style.backgroundColor)){
               return true;
               
           }
        }
    }
}

function verticalCheck(){
    //Checks each column individually
    for (let col = 0; col < 7; col++){
        //goes through the columns, row by row, to see if the colors are equal to each other. 
        //as soon as we hit the fourth row (count starts from top where hover pieces are, going down)
        for (let row = 0; row < 4; row++){
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, 
                tableRow[row+1].children[col].style.backgroundColor,
                tableRow[row+2].children[col].style.backgroundColor,
                tableRow[row+3].children[col].style.backgroundColor)){
                return true;
            };
        }   
    }
}

//going toward the right/up
function diagonalCheck(){
    //Only check up to 4 columns from where you last clicked
    for(let col = 0; col < 4; col++){
        //checks the rows going up to the left / down to the right
        for (let row = 0; row < 4; row++){
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, 
                //from the first position, move up one and over right one, check if same color
                tableRow[row+1].children[col+1].style.backgroundColor,
                //from the second position, move up two and over right two, check if same color
                tableRow[row+2].children[col+2].style.backgroundColor,
                tableRow[row+3].children[col+3].style.backgroundColor)){
                    return true;
                }
            }
        }
}

//going toward the left/down
function diagonalCheck2(){
    //Only check up to 4 columns from where you last clicked
    for(let col = 0; col < 4; col++){
        //checks the rows going down to the left / up to the right
        for (let row = 6; row > 3; row--){
            if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor,
                //from the first position, move down one and over left one, check if same color 
                tableRow[row-1].children[col+1].style.backgroundColor,
                //from the second position, move up one and over left one, check if same color
                tableRow[row-2].children[col+2].style.backgroundColor,
                tableRow[row-3].children[col+3].style.backgroundColor)){
                    console.log("hello2")
                    return true;
            }
        }
    }
}

//Check if there is a draw
function drawCheck(){
    let counter = 0
    
    //Checks each td/everything with class slot. tableSlot is defined on line 4
    /* After a piece has been placed, it checks the board to see if any
    td is not white. if its not, it adds 1 to counter 
    */
    tableSlot.forEach((slot) => {
        if (slot.style.backgroundColor !== 'white'){
            counter++
        }
    });
    
    //we subtract because we use the first 7 td to show what column you are in. They are not in play 
    if (counter === (tableCell.length-7)){
        return true;
    }
}



