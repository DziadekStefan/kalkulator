const inputA = document.getElementById("a");
const inputB = document.getElementById("b");
const ob = document.getElementById("ob");
const result = document.getElementById("result");
const countBtn = document.getElementById("count");
const keys = document.querySelectorAll(".keys div");

let activeInput = inputA;
inputA.addEventListener("focus", () => activeInput = inputA);
inputB.addEventListener("focus", () => activeInput = inputB);

keys.forEach(key => {
  key.addEventListener("click", () => {
    activeInput.value += key.dataset.value;
  });
});

countBtn.addEventListener("click", () => {
  const a = Number(inputA.value);
  const b = Number(inputB.value);
  let res = 0;

  switch (ob.value) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "*":
      res = a * b;
      break;
    case "/":
      res = b !== 0 ? a / b : "Nie dzielimy przez zero!!!";
      break;
  }
  result.textContent = res;
});
