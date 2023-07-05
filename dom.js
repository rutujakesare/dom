//EXAMINE THE DOCUMENT OBJECT//

console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.links);

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';




var items = document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.backgroundColor = 'green';

for(var i =0; i<items.length; i++)
{
    items[i].style.fontWeight = 'bold';
}

var li = document.getElementsByTagName('li');
console.log(li);
li[0].textContent = 'Hello';


var secondItem =document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color='green';

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].style.fontWeight='bold';
titles[0].style.color='green'; 

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0; i<odd.length; i++)
{
    odd[i].style.backgroundColor = 'green';
}

