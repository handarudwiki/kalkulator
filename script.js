document.addEventListener("DOMContentLoaded", function() {
  const inputDisplay = document.getElementById("inputDisplay");
  const outputDisplay = document.getElementById("outputDisplay");
  const buttons = document.querySelectorAll(".buttons button");

  let inputValue = "";
  let outputValue = "";

  buttons.forEach(button => {
      button.addEventListener("click", function() {
          const buttonText = this.innerText;

          if (buttonText === "=") {
              try {
                  outputValue = eval(inputValue).toString();
              } catch (error) {
                  outputValue = "Error";
              }
              outputDisplay.value = outputValue;
              inputValue = outputValue;
          } else if (buttonText === "C") {
              inputValue = "";
              outputValue = "";
              inputDisplay.value = "";
              outputDisplay.value = "";
          } else if (buttonText === "←") {
              inputValue = inputValue.slice(0, -1);
              inputDisplay.value = inputValue;
          } else {
              inputValue += buttonText;
              inputDisplay.value = inputValue;
          }
      });
  });
});