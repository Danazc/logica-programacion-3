function calcularFactorial() {
    let num = document.getElementById('number').value;
    num = parseInt(num);
  
    if (!isNaN(num) && num == parseInt(num) && num >= 0) {
      let factorial = 1;
      for (i = 1; i <= num; i++) {
        factorial *= i;
      }
  
      document.getElementById('result').innerHTML = `El factorial de ${num} es: ${factorial}`;
    } else {
      document.getElementById('result').innerHTML = 'Por favor, ingrese un número entero';
    }
  }