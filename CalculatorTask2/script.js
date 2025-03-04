let currentMode = 'standard';

function switchToScientificMode() {
  document.getElementById('mode-text').innerText = "Scientific Mode";
  document.getElementById('standard-buttons').style.display = 'none';
  document.getElementById('scientific-buttons').style.display = 'grid';
  document.querySelector(".container").classList.add('scientific');
  document.getElementById('display').classList.add('scientific');
  currentMode = 'scientific';
}

function switchToStandardMode() {
  document.getElementById('mode-text').innerText = "Standard Mode";
  document.getElementById('scientific-buttons').style.display = 'none';
  document.getElementById('standard-buttons').style.display = 'grid';
  document.querySelector(".container").classList.remove('scientific');
  document.getElementById('display').classList.remove('scientific');
  currentMode = 'standard';
}

document.getElementById('mode-toggle').addEventListener('click', function () {
  if (currentMode === 'standard') {
    switchToScientificMode();
  } else {
    switchToStandardMode();
  }
});

function appendToDisplay(value) {
  const display = document.getElementById('display');
  if (value === 'x^y') {
    // Append only '^' for x^y
    display.value += '^';
  } else if (value === 'x^2' || value === 'x^3' || value === '10^x' || value === 'e^x' || value === 'x!') {
    // Handle special cases where user needs to input values
    display.value += value.replace('x', ''); // Append the operator (e.g., ^2, ^3, etc.)
  } else {
    display.value += value; // Append normal values
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById('display');
  let expression = display.value;
  

  try {
    // Replace special functions with their mathematical equivalents
    expression = expression
      .replace(/\bRand\b/g, 'Math.random()')
      .replace(/\bsinh\b/g, 'Math.sinh') 
      .replace(/\bcosh\b/g, 'Math.cosh') 
      .replace(/\btanh\b/g, 'Math.tanh') 
      .replace(/\bsin\b/g, 'Math.sin')   
      .replace(/\bcos\b/g, 'Math.cos')   
      .replace(/\btan\b/g, 'Math.tan') 
      .replace(/(\d+)\^2/g, (match, base) => `Math.pow(${base}, 2)`) 
      .replace(/(\d+)\^3/g, (match, base) => `Math.pow(${base}, 3)`)
      .replace(/(\d+)\^(\d+)/g, (match, base, exponent) => `Math.pow(${base}, ${exponent})`) 
      .replace(/10\^(\d+)/g, (match, exponent) => `Math.pow(10, ${exponent})`) 
      .replace(/e\^(\d+)/g, (match, exponent) => `Math.exp(${exponent})`) 
      .replace(/sqrt/g, 'Math.sqrt')
      .replace(/log/g, 'Math.log10')
      .replace(/ln/g, 'Math.log')
      .replace(/pi/g, 'Math.PI')
      .replace(/(\d+)!/g, (match, num) => `factorial(${num})`) 
      .replace(/(\d+)%/g, (match, num) => `${num} / 100`); 

    
    display.value = eval(expression);
  } catch (error) {
    display.value = 'Error';
  }
}


// Factorial function
function factorial(n) {
  if (n < 0) return 'Error';
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}