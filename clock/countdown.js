let logTick = true;
let counter = 10;

console.log(counter);

let timer = setInterval(() => {
    counter--;
    console.log(counter);
}, 1000);

setTimeout(() => {
    clearInterval(timer);
    console.log("Guten Morgen");
}, counter * 1000 + 100);