function calculadora() {

  var suma;
  var resta;
  var multipliacion;
  var division;

  alert("Para hacer cualquier operacion, escribe que operacion quieres, suma = 1, resta = 2, multiplicacion = 3 o division = 4");

  var operacion = prompt("Que operacion quieres");
  console.log(operacion);

  switch (operacion) {
    case "1":
      let sum1 = prompt('suma, ingresa el primer valor');
      let sum2 = prompt('suma, ingresa el segundo valor');
      let resultado = parseInt(sum1) + parseInt(sum2);
      alert('El resultado es ' + resultado);
      break;
    case "2":
      let res1 = prompt('resta, ingresa el primer valor');
      let res2 = prompt('resta, ingresa el segundo valor');
      let resultado2 = parseInt(res1) - parseInt(res2);
      alert('El resultado es ' + resultado2);
      break;
    case "3":
      let m1 = prompt('multipliacion, ingresa el primer valor');
      let m2 = prompt('multipliacion, ingresa el segundo valor');
      let resultado3 = parseInt(m1) * parseInt(m2);
      alert('El resultado es ' + resultado3);
      break;
    case "4":
      let d1 = prompt('division, ingresa el primer valor');
      let d2 = prompt('division, ingresa el segundo valor');
      let resultado4 = parseInt(d1) / parseInt(d2);
      alert('El resultado es ' + resultado4);
      break;
    default:
  }
}
