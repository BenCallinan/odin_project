const btn = document.querySelector('#btn2');
btn.onclick = () => alert("Hello World");

const btn1 = document.querySelector('#btn3');
btn1.addEventListener('click', () => {
    alert("Hello World");
});

function alertFunction() {
    alert("YAY! YOU DID IT!");
}

btn5.onclick = alertFunction;

btn6.addEventListener('click', alertFunction);

btn6.addEventListener('click', function (e) {
    console.log(e);
});

btn6.addEventListener('click', function (e) {
    console.log(e.target);
});

btn6.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});