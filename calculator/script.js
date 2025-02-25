function appendValue(value) {
    const display = document.getElementById("screen");
    display.value += value;
  }
  function percentage() {
    const display = document.getElementById("screen");
    if (display.value) {
      display.value = (parseFloat(display.value) / 100).toString();
    }
  }

  function allclear() {
    const display = document.getElementById("screen");
    display.value = "";
  }

  function toggleSign() {
    const display = document.getElementById("screen");
    if (display.value) {
      display.value = (parseFloat(display.value) * -1).toString();
    }
  }

  function equal() {
    const display = document.getElementById("screen");
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  }