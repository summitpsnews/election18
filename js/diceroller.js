var dieType = document.getElementById("dieType");
var dieCount = document.getElementById("diceCount");
var roll = document.getElementById("roll");
var results = document.getElementById("results");
var total = [];
var i = 0;
var num1 = 0;
roll.addEventListener("click", function() {
    total = [];
    var diceCount = +dieCount.value;
    var diceType = dieType.value;
    // alert (diceCount);

    if (diceType === "d4") {
        for(i = -diceCount; i++ ; i < diceCount){
            num1 = Math.floor((Math.random() * 4) + 1);
            total.push(num1);
        }
        results.innerHTML = total.reduce(add, 0);
    }
    else if (diceType === "d6") {
        for(i = -diceCount; i++ ; i < diceCount){
            num1 = Math.floor((Math.random() * 6) + 1);
            total.push(num1);
        }
        results.innerHTML = total.reduce(add, 0);
    }
    else if (diceType === "d8") {
        for(i = -diceCount; i++ ; i < diceCount){
            num1 = Math.floor((Math.random() * 8) + 1);
            total.push(num1);
        }
        results.innerHTML = total.reduce(add, 0);
    }
    else if (diceType === "d10") {
        for(i = -diceCount; i++ ; i < diceCount){
            num1 = Math.floor((Math.random() * 10) + 1);
            total.push(num1);
        }
        results.innerHTML = total.reduce(add, 0);
    }
    else if (diceType === "d12") {
        for(i = -diceCount; i++ ; i < diceCount){
            num1 = Math.floor((Math.random() * 12) + 1);
            total.push(num1);
        }
        results.innerHTML = total.reduce(add, 0);
    }
    else if (diceType === "d20") {
        for(i = -diceCount; i++ ; i < diceCount){
            num1 = Math.floor((Math.random() * 20) + 1);
            total.push(num1);
        }
        results.innerHTML = total.reduce(add, 0);
    }
    else if (diceType === "d100") {
        for(i = -diceCount; i++ ; i < diceCount){
            num1 = Math.floor((Math.random() * 100) + 1);
            total.push(num1);
        }
        results.innerHTML = total.reduce(add, 0);
    }
});

function add(a, b) {
    return a + b;
}