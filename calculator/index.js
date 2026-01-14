let result = document.getElementById("result");

function add(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function calculate() {
  result.value = eval(result.value);
}