// document.querySelector('p').innerText / document.querySelector('p').innerHTML / document.querySelector('p').textContent

const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

const firstLink = document.querySelector('a')
firstLink.href
firstLink.getAttribute('href')

//window.getComputedStyle(a).color;

// firstLink.classList.add/remove/toggle/contains.......

const firstBold = document.querySelector('b');
firstBold.parentElement;

const paragraph = firstBold.parentElement;
paragraph.children;

const squareImg = document.querySelector('.square');
squareImg.parentElement;
squareImg.children;
squareImg.nextSibling; squareImg.previousSibling // gives us a node -- nodes can represend text, the browser makes whitespace into a textnode.
squareImg.nextElementSibling; squareImg.previousElementSibling // better ignores white nodes...

const newImg = document.createElement('img');
console.dir(newImg);
newImg.src = "https://images.unsplash.com/photo-1565708097881-bbf4ecf47cc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";
document.body.appendChild(newImg);
newImg.classList.add('square')

const newH3 = document.createElement('h3')
newH3.innerText = 'I am NEW h3!!!';
document.body.appendChild(newH3);

const p = document.querySelector('p')
p.append('i am new text yaaaaaayyyy!!!!!!')

const newB = document.createElement('b');
newB.append('Hi!')
p.prepend(newB);

const h2 = document.createElement('h2');
h2.append("Are adorable chikens")
const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend', h2);

const firstLi = document.querySelector('li');
const ul = firstLi.parentElement;

ul.removeChild(firstLi);

const img = document.querySelector('img');
img.remove();
