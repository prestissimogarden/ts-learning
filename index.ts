const decBtn = <HTMLButtonElement>document.getElementById("decBtn");
const incBtn = <HTMLButtonElement>document.getElementById("incBtn");
const reset = <HTMLButtonElement>document.getElementById("resetBtn");
const counter = <HTMLLabelElement>document.getElementById("counter");
let count = 0;

incBtn.onclick = function () {
  count++;
  counter.textContent = String(count);
};

decBtn.onclick = function () {
  count--;
  counter.textContent = String(count);
};

reset.onclick = function () {
  count = 0;
  counter.textContent = String(count);
};
