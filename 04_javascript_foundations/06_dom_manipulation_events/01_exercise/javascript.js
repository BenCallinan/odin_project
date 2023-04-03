const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const p = document.createElement('p');
p.classList.add('p');
p.textContent =  "Hey I'm red!";
p.style.color = 'red';
container.appendChild(p);

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = "I'm a blue h3!"
h3.style.color = 'blue';
container.appendChild(h3);

const moreContent = document.createElement('div');
moreContent.classList.add('moreContent');
moreContent.style.backgroundColor = "pink";
moreContent.style.border = "thick solid black";

const head = document.createElement('h1');
head.classList.add('h1');
head.textContent = "I'm a div";
moreContent.appendChild(head);

const para = document.createElement('p');
para.classList.add('p');
para.textContent = "ME TOO!"
moreContent.appendChild(para);

container.appendChild(moreContent);