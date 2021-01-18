console.log("Welcome to Gambling Simulator program")

const bet = 1;
const stake = 100;
const NumOfDays = 20;

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
    let lose = 0;
    let end = 150;
    let start = 50;
    let range = 50;
    let numOfWin = 0;
    let numOfLose = 0;
    while(cash < end && cash > start){
        let random =  Math.floor(Math.random() * 10) % 2;
        if(random == win){
            cash += bet;
        }else{
            cash -= bet;
        }
    }
    if((cash - 100) > 0){
        numOfWin++;
        win += 50;
        console.log("Win");
    }else{
        numOfLose--;
        lose -= 50;
        console.log("Lose")
    }
}
resignGame();

NumOfDaysAmount = () =>{
    let win = 1;
    let winAmount = 0;
    for(let day = 1; day < NumOfDays; day++){
        let random = Math.floor(Math.random() * 10) % 2;
        while(day < NumOfDays){
            winAmount +=stake;
            day++;
        }
        console.log("Won Amount is:" + winAmount);
    }
}

monthOfDay = () =>{

}
NumOfDaysAmount();
module.export = {winOrLose, resignGame};