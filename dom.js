//EXAMINE THE DOCUMENT OBJECT//

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';




// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[2].style.backgroundColor = 'green';

// for(var i =0; i<items.length; i++)
// {
//     items[i].style.fontWeight = 'bold';
// }

// var li = document.getElementsByTagName('li');
// console.log(li);
// li[0].textContent = 'Hello';


// var secondItem =document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='green';

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].style.fontWeight='bold';
// titles[0].style.color='green'; 

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(var i=0; i<odd.length; i++)
// {
//     odd[i].style.backgroundColor = 'green';
// }

//TRAVERSING THE DOM//
var itemList = document.querySelector('#items');

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor ='#f4f4f4';

//firstChild
console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstElementChild);

//lastChild
console.log(itemList.lasttChild);
//lastElementChild
console.log(itemList.lastElementChild);

//nextSibling
console.log(itemList.nextSibling);
//nextSiblingElement
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);

//createElement

//create a div
var newDiv =  document.createElement('div');

//Add class
newDiv.className='Hello';

//Add id
newDiv.id='hello1';

//Add attr
newDiv.setAttribute('title', 'Hello Div');

//Create text node
var newDivText = document.createTextNode('Hello World');

//Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');



console.log(newDiv);

container.insertBefore(newDiv,h1);

var newItem = document.createElement('li');
newItem.className = 'list-group-item';
var newItemText = document.createTextNode('Hello World');
newItem.appendChild(newItemText);

var itemsList = document.getElementById('items');
var firstItem = itemsList.firstChild;
itemsList.insertBefore(newItem, firstItem);