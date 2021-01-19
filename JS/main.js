console.log("Welcome to Gambling Simulator program")

const bet = 1;
const stake = 100;
const win = 1;
const NumOfDays = 20;
let array = new Array();
let totalAmount = 0;
let dayWon = 0;
let dayLost = 0;

winOrLose = () => {
    let random =  Math.floor(Math.random() * 10) % 2;
    if (win == random){
        console.log("Win")
    }else{
        console.log("Lose")
    }
}
winOrLose();

resignGame = () =>{
    let win = 1;
    let cash = 0;
    let day = 1;
    while(day <= 20){
        while(cash < 50 && cash > -50){
            let random =  Math.floor(Math.random() * 10) % 2;
            if(random == win){
                cash += bet;
            }else{
                cash -= bet;
            }
        }
        totalAmount += cash;
        if(cash == 50){
            dayWon++;
            console.log("Won" + cash);
        }else{
            dayLost++;
            console.log("Lose" + cash)
        }
        console.log("Gambler resigned day " + day + " with amount " + totalAmount);
        array.push(totalAmount);
        day++;
        cash = 0;
    }
}
resignGame();

totalWinOrLoses = () => {
        if(totalAmount > 0){
            console.log("After 20 days, player won: " + totalAmount)
        }else{
            console.log("After 20 days, player lost: " + totalAmount)
        }
        console.log("Total days lost: " + dayLost);
        console.log("Total days won: " + dayWon);
    }
totalWinOrLoses();
 
module.export = {winOrLose, resignGame, totalWinOrLoses};