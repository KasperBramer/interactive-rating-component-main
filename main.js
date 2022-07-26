console.log('hello world');
let a = document.getElementById('rating-btn-1');
let b = document.getElementById('rating-btn-2');
let c = document.getElementById('rating-btn-3');
let d = document.getElementById('rating-btn-4');
let e = document.getElementById('rating-btn-5');
let rating = '';
let submitBTN = document.getElementById('rating-result');
let isa = document.getElementById("number-two").textContent
let test11 =document.getElementById("number-")

console.log(submitBTN.innerText);

document.getElementById('rating-btn-1').onclick = function () {
  rating = a.innerText;
  console.log(rating);
};
document.getElementById('rating-btn-2').onclick = function () {
  rating = b.innerText;
};
document.getElementById('rating-btn-3').onclick = function () {
  rating = c.innerText;
};
document.getElementById('rating-btn-4').onclick = function () {
  rating = d.innerText;
};
document.getElementById('rating-btn-5').onclick = function () {
  rating = e.innerText;

  let element = document.getElementById('rating-btn-5');
  element.classList.add('myStyle');
};

function demo() {

  document.getElementById('rating-result').innerText = rating;
  console.log(rating);
  let test11 = document.getElementById('number-one');
  test11.classList.add('removeStyle');
  test11.innerText = ""
  let demo3 = document.getElementById('number-two');
  demo3.classList.remove('hide');
}



window.onload = function test30() {
    let demo2 = document.getElementById('number-two');
    demo2.classList.add('hide');
};
