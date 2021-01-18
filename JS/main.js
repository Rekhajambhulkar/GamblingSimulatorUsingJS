console.log("WElcome to Gambling Simulator program")

const bet = 1;
const stake = 100;

winOrLose = () => {
    let win = 1;
    let random =  Math.floor(Math.random() * 10) % 2;
    if (win == random){
        console.log("Win")
    }else{
        console.log("Lose")
    }
}
winOrLose();

resignGame = () =>{
    let cash = stake;
    let win = 1;
    let end = 150;
    let start = 50;
    let range = 50;
    let numOfWin = 0;
    let numOfLose = 0;
    while(cash < end && cash > start){
        if(win == range){
            let random =  Math.floor(Math.random() * 10) % 2;
            cash += bet;
        }else{
            cash -= bet;
        }
    }
    if(cash >= 50){
        numOfWin++;
        console.log("Win");
    }else{
        numOfLose--;
        console.log("Lose")
    }
}
resignGame();
module.export = {winOrLose, resignGame};