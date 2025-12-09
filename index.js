const screen = document.getElementById("screen");

const ac = document.getElementById("ac");

const del = document.getElementById("del");

const value = document.getElementById("value");

const slash = document.getElementById("slash");

const seven = document.getElementById("seven");

const eight = document.getElementById("eight");

const nine = document.getElementById("nine");

const yulduz = document.getElementById("yulduz");

const four = document.getElementById("four");

const five = document.getElementById("five");

const six = document.getElementById("six");

const minus = document.getElementById("minus");

const one = document.getElementById("one");

const two = document.getElementById("two");

const three = document.getElementById("three");

const plus = document.getElementById("plus");

const pm = document.getElementById("pm");

const zero = document.getElementById("zero");

const tochka = document.getElementById("tochka");

const teng = document.getElementById("teng");


ac.addEventListener("click", function(){
    screen.textContent = "0";
})

one.addEventListener("click", function(){
    if (screen.textContent == "0"){
        screen.textContent = "";
    }
    screen.textContent += "1";
})

two.addEventListener("click", function(){
    if (screen.textContent == "0"){
        screen.textContent = "";
    }
    screen.textContent += "2";
})

three.addEventListener("click", function(){
    if (screen.textContent == "0"){
        screen.textContent = "";
    }
    screen.textContent += "3";
})

four.addEventListener("click", function(){
    if (screen.textContent == "0"){
        screen.textContent = "";
    }
    screen.textContent += "4";
})

five.addEventListener("click", function(){
    if (screen.textContent == "0"){
        screen.textContent = "";
    }
    screen.textContent += "5";
})

six.addEventListener("click", function(){
    if (screen.textContent == "0"){
        screen.textContent = "";
    }
    screen.textContent += "6";
})

seven.addEventListener("click", function(){
    if (screen.textContent == "0"){
        screen.textContent = "";
    }
    screen.textContent += "7";
});

eight.addEventListener("click", function(){
    if (screen.textContent == "0"){
        screen.textContent = "";
    }
    screen.textContent += "8";
});

nine.addEventListener("click", function(){
    if (screen.textContent == "0"){
        screen.textContent = "";
    }
    screen.textContent += "9";
});

zero.addEventListener("click", function(){
    if (screen.textContent == "0"){
        screen.textContent = "";
    }
    screen.textContent += "0";
});

del.addEventListener("click",function(){
    if(screen.textContent == "0"){
        screen.textContent = "0";
    }
    let son = screen.textContent;
    son = son.slice(0, son.length - 1); 
    screen.textContent = son;

})

tochka.addEventListener("click", function(){
    if(!screen.textContent.includes(".")){
        screen.textContent += ".";
    }
})


let num1;
let op;

plus.addEventListener('click', function(){
    num1 = +screen.textContent;
    screen.textContent = "0";

    op = "plus";
});

minus.addEventListener('click', function(){
    num1 = +screen.textContent;
    screen.textContent = "0";

    op = "minus";
});

slash.addEventListener('click', function(){
    num1 = +screen.textContent;
    screen.textContent = "0";

    op = "slash";
});

yulduz.addEventListener('click', function(){
    num1 = +screen.textContent;
    screen.textContent = "0";

    op = "yulduz";
});



teng.addEventListener('click', function(){
    let num2 = +screen.textContent;
    let result;
    if (op === "plus") {    
        result = num1 + num2;
    } else if (op === "minus"){
        result = num1 - num2;
    } else if (op === "slash"){
        result = num1 / num2;
    } else if (op === "yulduz"){
        result = num1 * num2;
    } 

    screen.textContent = result;
});


value.addEventListener('click', function(){
    let num = +screen.textContent;
    screen.textContent = num / 100;
});

pm.addEventListener("click",function(){
    let number = screen.textContent;
    if (+number > 0){
        screen.textContent = "-" + number;
    } else if (+number < 0){  
        screen.textContent = number.slice(1);   
    }
})