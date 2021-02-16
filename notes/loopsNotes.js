//iteration - same thing over and over again
//counter - starting point, initialized with value
//condition - true/false if loop continues
//iterator - increments counter each loop
//psudocode example:
loop(food = 0; foodNeeded = 10) {
    if (food >= foodNeeded) {
        exit loop; //we have enought food, lets go home
    } else {
        food += 2; //spend hour collecting 2 food 
    }//loop run again
}
//100 random circles
for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
}

//for loop
for (initializer; CSSConditionRule; final-expression) {
    //code to run
}
//example
const cats = ['Niko', 'Wizard', 'Oz', 'Mika'];
let info = 'My cats are called ';
const para = document.querySelector('p');

for (let i = 0; i < cats.length; i++) {
    info += cats[i] = ', ';
}

para.textContent = info;

//skipping iterations with continue
let num = input.value;

for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
        continue;
    }
    para.textContent =+ i + ' ';
}

//while and do...while
initializer
while (condition) {
    //code to run
    final-expression
}
//example
let i = 0;

while (i < cats.length) {
    if (i === cats.length -1) {
        info =+ 'and ' + cats[i] + '.';
    } else {
        info += cats[i] + ', ';
    }
    i++
}
//do while
initializerdo {
    //code to run
    final-expression
} while (condition)
//condition is checked last, after running
let i = 0;

do {
    if (i === cats.length -1) {
        info += 'and ' + cats[i] + '.';
    } else {
        info += cats[i] + ', ';
    }
    i++;
} while (i < cats.length);