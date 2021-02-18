//copied from exercise
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//add a <p> with red text that says "Hey I'm red!"
const para = document.createElement('p');
para.classList.add('para');
para.textContent = 'Hey I\'m red!';
para.style.color = 'red';

container.appendChild(para);

//add an <h3> with blue text that says "I'm a blue h3!"
const header = document.createElement('h3');
header.textContent = 'I\'m a blue h3!';
header.style.color = 'blue';
container.appendChild(header);

//add a <div> with a black border and pink background color with:
//another <h1> that says "I'm in a div"
//a <p> that says "ME TOO!"
//hint: after creating the div with createElement, append the <h1> and <p> to it before adding to container
const contentTwo = document.createElement('div');
contentTwo.classList.add('contentTwo');
contentTwo.style.backgroundColor = 'pink';
contentTwo.style.borderColor = 'black';

const headerTwo = document.createElement('h1');
headerTwo.textContent = 'I\'m in a div';

const paraTwo = document.createElement('p');
paraTwo.textContent = 'ME TOO!';

contentTwo.appendChild(headerTwo);
contentTwo.appendChild(paraTwo);
container.appendChild(contentTwo);