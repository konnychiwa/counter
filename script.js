let count = 0;
const counterDisplay = document.getElementById("counterDisplay");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

counterDisplay.textContent = count;

increaseBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  count--;
  counterDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = count;
});
