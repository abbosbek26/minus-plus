
// console.log();

// titleEl.innerHTML = "<i>Salom<i>";
// titleEl.textContent = "salom"
// const titleEl = document.getElementById("title");
// const btnEl = document.getElementsByClassName("btn")
// console.log(titleEl);
// console.log(btnEl);
// console.log(btnEl[0].textContent);
// console.log(btnEl[1].textContent);


const number = document.getElementById('content');
const plusBtn = document.getElementById('btn2');
const minusBtn = document.getElementById('btn1');

let value = Number(number.textContent.trim());

plusBtn.addEventListener('click', () => {
    value++;
    number.textContent = value;
});

minusBtn.addEventListener('click', () => {
    value--;
    number.textContent = value;
});
