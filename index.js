var decBtn = document.getElementById("decBtn");
var incBtn = document.getElementById("incBtn");
var reset = document.getElementById("resetBtn");
var counter = document.getElementById("counter");
var count = 0;
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
