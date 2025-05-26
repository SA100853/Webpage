let isDark = false;

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  isDark = !isDark;
  document.querySelector('.theme-toggle').textContent = isDark ? '☀' : '🌙';
}

function append(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const expression = document.getElementById('display').value;
    const result = eval(expression);
    document.getElementById('display').value = result;
  } catch {
    document.getElementById('display').value = 'Think Again!';
  }
}

function calculateFunction(func) {
  try {
    const val = parseFloat(document.getElementById('display').value);
    let result;
    switch (func) {
      case 'sin': result = Math.sin(val * Math.PI / 180); break;
      case 'cos': result = Math.cos(val * Math.PI / 180); break;
      case 'tan': result = Math.tan(val * Math.PI / 180); break;
      case 'log': result = Math.log10(val); break;
      case 'sqrt': result = Math.sqrt(val); break;
      case 'fact':
        if (val < 0 || !Number.isInteger(val)) throw 'Invalid';
        result = 1;
        for (let i = 2; i <= val; i++) result *= i;
        break;
      default: result = val;
    }
    document.getElementById('display').value = result;
  } catch {
    document.getElementById('display').value = 'Think Again!';
  }
}
