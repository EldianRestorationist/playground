//Document Object Model
//tree of nodes, with parent, children, siblings

//target nodes with selectors
<div class="display"></div>
//div.display, .display, #container > .display, div#container > div.display
//rational selectors //firstElementChild, lastElementChild
const container = document.querySelector('#container');
//select the #container div
console.dir(container.firstElementChild);
//select the first child of #container => .display
const controls = document.querySelector('.controls');
//select the .controls div
console.dir(controls.previousElementSibling);
//selects the prior sibling => .display
//identifying certain node based on relationship to nodes around it

//dom methods //nodes are objects with properties and methods attached

//query selectors
Element.querySelector(selector)
//returns first match of selector
Element.querySelectorAll(selectors)
//returns a 'nodelist' containing references to all matches of selectors

//element creation //document.createElemet(tagName[, option])
const div = document.createElement('div');
//this this creates, but does not place in dom
//append elements
parentNode.appendChild(childNode)
//appends childNode as last child of parentNode
parentNode.insertBefore(newNode, referenceNode)
//iserts newNode into parentNode before referenceNode
parentNode.removeChild(child) 
//removes child from parentNode on dom and returns reference to child
//alerting elements
const div = document.createElement('div');
//creat new div reerenced in the variable 'div'

//adding inline style
div.style.color = 'blue';
//adds the indicated style rule
div.style.cssText = 'color: blue; background: white';
//adds several style rules
div.setAttribute('style', 'color: blue; background: white');
//adds several style rules
//if accessing kebab-case css, use camelCase or bracket notation instead of dot notation
div.style.backgroud-color // doesn't work - attempts to subtract color from div.style.background
div.style.backgroundColor //access the divs background-color style
div.style['background-color'] //also works
div.style.cssText = "background-color: white" //ok in a string

//editing attributes
div.setAttribute('id', 'theDiv');
//if id exists update it to 'theDiv' else creates and id with value "theDiv"
div.getAttribute('id');
//returns value of specified attribute, this case "theDiv"
div.removeAttribute('id');
//removes specified attribute

//working with classes
div.classList.add('new');
//adds class "new" to your new div
div.classList.remove('new');
//remove "new" class from dic
div.classList.toggle('active');
//if div doesnt' hav a class "active" then add it, or if it does, remove it
//convention to toggle css style, not add and remove inline

//adding text content
div.textContent = 'Hello World!'
//creates a text node containing "Hello World!" and inserts it in div

//adding html content
div.innerHTML = '<span>Hello World!</span>';
//renders the html inside div
//textContent preferred, innerHTML can create security risk


//JavaScript does not alter HTML file, only DOM
//HTML file will look the same, JS changes what the browser renders

//JS will run when file is run, or when script tag is encountered in HTML
//if include js file at top, dom manipulation will not work
//put at bottom so runs after dom nodes parsed and created

//Exercise

//<!-- your html file: -->
//<body>
//  <h1>
//      THE TITLE OF YOUR WEBPAGE
//  </h1>
//  <div id="container"></div>
//</body>

// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//<!-- The DOM -->
//<body>
//  <h1>
//      THE TITLE OF YOUR WEBPAGE
//  </h1>
//  <div id="container">
//      <div class="content">
//          This is the glorious text-content!
//      </div>
//  </div>
//</body>

