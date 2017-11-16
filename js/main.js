let output = document.getElementById('screen');
let initial = document.getElementById('startVal');

// Checks for for localStorage before initializing output screen value
if (localStorage) {
  output.value = localStorage.count;
} else {
  output.value = 0;
}

// Number() required to convert string to number
let screenValue = Number(output.value);

updateStorage = () => {
  localStorage.count = Number(screenValue);
}
printOutput = () => {
  output.value = localStorage.count ? localStorage.count : screenValue;
}
screenChange = () => {
  screenValue = Number(output.value);
  updateStorage();
}

increment = action => {
  screenValue = Number(output.value);
  if (action === '+') {
    screenValue += 2;
    updateStorage();
  }
  screenValue--;
  updateStorage();
  printOutput();
};

reset = () => {
  screenValue = 0;
  updateStorage();
  printOutput();
  initial.value = null;
}

startAt = () => {
  let newStartVal = Number(initial.value);
  if (newStartVal) {
    screenValue = newStartVal;
    updateStorage();
    printOutput();
    initial.value = null;
  }
};
