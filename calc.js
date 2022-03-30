let newStart = true;
let typingNumbers = true;
let memory=0;
let display=0;
let lastOp=""

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
    console.log(display);
}

