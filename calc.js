let newStart = true;
let typingNumbers = false;
let memory=0;
let display=0;
let textDisplay="0"
let lastOp=""
const displayElement = document.querySelector("#display");

const add = function(first,second) {
    return first + second;
};
  
const subtract = function(first, second) {
    return first - second;
};
  
const multiply = function(first, second) {
    return first * second;
};

const divide = function(first, second) {
    if (second===0) {
        alert("You can't divide by zero")
        handleClear();
    } else {
        return first / second;
    }
};

const handleClear = function() {
    newStart = true;
    memory=0;
    display=0;
    textDisplay=0;
    handleUpdateDisplay();
    console.log("cleared");
}

const operate = function(op,mem,disp) {
    if (!op) {
        memory=disp;
        return disp;
    } else {
        memory= op(mem,disp);
        return memory;
    }
}
const handlePlus = function(mem,disp) {
    let result=operate(lastOp,mem,disp);
    lastOp=add;
    display=result;
    memory=display;
    handleUpdateDisplay();
    typingNumbers = false;
}

const handleMinus = function(mem,disp) {
    let result=operate(lastOp,mem,disp);
    lastOp=subtract;
    display=result;
    memory=display;
    handleUpdateDisplay();
    typingNumbers = false;
}

const handleTimes = function(mem,disp) {
    let result=operate(lastOp,mem,disp);
    lastOp=multiply;
    display=result;
    memory=display;
    handleUpdateDisplay();
    typingNumbers = false;
}

const handleDivBy = function(mem,disp) {
    let result=operate(lastOp,mem,disp);
    lastOp=divide;
    display=result;
    memory=display;
    handleUpdateDisplay();
    typingNumbers = false;
}

const handleEqual = function(mem,disp) {
    let result=operate(lastOp,mem,disp);
    display=result;
    memory=display;
    lastOp="";
    newStart = true;
    typingNumbers = true;
}

const handleUpdateDisplay = function() {
    display = Number(textDisplay);
    displayElement.textContent = textDisplay;
    console.log(display);
}

const handleNumber = function(e) {
    if (typingNumbers) {
        textDisplay += e.target.innerText;
        console.log(`concatenating to ${textDisplay}`);
    } else {
        textDisplay = e.target.innerText;
        console.log(`reseting to ${textDisplay}`);
    }
    typingNumbers = true;
    handleUpdateDisplay();
 }

const handleOp = function(e) {
    console.log(e.target);
}

const handleDecimal = function(e) {
    if (textDisplay.includes(".")) return;
    textDisplay += ".";
}

const numButs = document.querySelectorAll(".num");
numButs.forEach(button => {
    button.addEventListener("click",handleNumber);
});

const opButs = document.querySelectorAll(".op");
    opButs.forEach(button => {
    button.addEventListener("click",handleOp);
});

const allClear = document.querySelector(".clear");
allClear.addEventListener("click",handleClear);

const decimal = document.querySelector(".point");
decimal.addEventListener("click",handleDecimal);

handleUpdateDisplay();