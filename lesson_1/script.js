let bt1 = document.getElementById('btn-1');
let bt2 = document.getElementById('btn-2');
let bt3 = document.getElementById('btn-3');

let click = document.getElementById('click');

bt1.addEventListener('click', () => {
    click.innerText='Лазанья';
});

bt2.addEventListener('click', () => {
    click.innerText='Темное пиво';
});

bt3.addEventListener('click', () => {
    click.innerText='Узвар из сухофруктов';
});