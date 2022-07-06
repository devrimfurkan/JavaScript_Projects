function getButtonText(value){
    document.querySelector("#result").value+=value;
}
function getResult() {
  let result = document.querySelector("#result").value;
  let temp = eval(result);
  document.querySelector("#result").value = sum;
}