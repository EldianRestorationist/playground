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
