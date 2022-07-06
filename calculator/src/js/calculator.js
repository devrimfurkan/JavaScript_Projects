function getButtonText(value){
    document.querySelector("#result").value+=value;
}
function getResult() {
  let result = document.querySelector("#result").value;
  try {
      let temp = eval(result);
      document.querySelector("#result").value = temp;
  } catch (error) {
    console.log(error);
    document.querySelector("#result").value= window.alert("ERROR");
  }
}
function deleteScreen(){
   document.querySelector("#result").value = 0;
}