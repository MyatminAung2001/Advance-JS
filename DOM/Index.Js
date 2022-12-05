// EXAMINE DOCUMENT OBJECT MODEL //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[11]);
// console.log(document.all[13]);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

//GET ELEMENTBYID //
// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerHTML);
// header.style.borderBottom = 'solid 3px #000';

//GET ELEMENTBYCLASSNAME //
// let items = document.getElementsByClassName('list-group-item')
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontSize = '30px';
// items[1].style.backgroundColor = 'green';

        
// // items.style.backgroundColor = 'yellow'

// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'grey';
// };

//GET ELEMENTBYTAGNAME //
// let li = document.getElementsByTagName('li')
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontSize = '30px';
// li[1].style.backgroundColor = 'green';

        
// // items.style.backgroundColor = 'yellow'

// for (let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = 'grey';
// };

// QUERYSELECTOR //
// let header = document.querySelector('#main-header');
// header.style.borderBottom = '2px solid black';
        
// let input = document.querySelector('input');
// input.value = 'Hello';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'yellow';

// QUERYSELECTORALL //
// let title = document.querySelectorAll('.title');

// console.log(title);
// title[0].textContent = 'Hello';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for (let i = 0; i < odd.length; i ++) {
//     odd[i].style.backgroundColor = 'grey';
// }

// for (let i = 0; i < odd.length; i ++) {
//     even[i].style.backgroundColor = 'blue';
// }

//Traversing The DOM//
let itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'lightgrey';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor = 'lightgrey';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);

//children
// console.log(itemList.children);
// console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

//firstChild
// console.log(itemList.firstChild);

//firstelementChild
// console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello';

//lastChild
// console.log(itemList.lastChild);

//lastelementChild
// console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Goodbye';

//nextsibling
// console.log(itemList.nextSibling);

//nextelementsibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);

//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'blue';

//createElement
        
//create a div
// let newDiv = document.createElement('div');

//add class name
// newDiv.className = 'Hello';

// add id
// newDiv.id = 'hello 1'

// add attr
// newDiv.setAttribute('title','Hello Div');

// create text node
// let newDivText = document.createTextNode('Hello world');

// add text to div
// newDiv.appendChild(newDivText);

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');

// container.insertBefore(newDiv,h1);
// newDiv.style.fontSize = '30px'

// console.log(newDiv);

// EVENTS //
// let button = document.getElementById('button').addEventListener
// ('click', buttonClick);
        
// function buttonClick(e) {
//         console.log('Button Clicked');
//         document.getElementById('header-title').textContent = 'Change';
//         document.querySelector('#main').style.backgroundColor = 'lightgreen';
//         console.log(e);

//         console.log(e.target);
//         console.log(e.target.id);
//         console.log(e.target.className);
//         console.log(e.target.classList);

//         let output = document.getElementById('output');
//         output.innerHTML = '<h3>+e.target.id+</h3>'

//         console.log(e.type);

//         console.log(e.clientX);
//         console.log(e.clientY);

//         console.log(e.offsetX);
//         console.log(e.offsetY);

//         console.log(e.altKey);
//         console.log(e.ctrlKey);
//         console.log(e.shiftKey);

let button = document.getElementById('button');
let box = document.getElementById('box');

// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
let select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e) {
        e.preventDefault();
        console.log(`EVENT TYPE: `+e.type);
        // document.body.style.display = 'none';

        // console.log(e.target.value);
        // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'

        // output.innerHTML ='<h3>MouseX : '+e.offsetX+' </h3><h3>MouseY '+e.offsetY+'</h3>';

        // box.style.backgroundColor = 'rgb("+e.offsetX+","+e.offsetY+,40)';
}