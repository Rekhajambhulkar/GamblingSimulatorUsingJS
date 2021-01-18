console.log("WElcome to Gambling Simulator program")

const bet = 1;
const stake = 100;

winOrLose = () => {
    let win = 1;
    let random = Math.floor(Math.random() * 10) % 2;
    if (win == random){
        console.log("Win")
    }else{
        console.log("Lose")
    }
}
winOrLose();

module.export = {winOrLose};