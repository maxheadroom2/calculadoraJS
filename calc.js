window.onload = function() {

  var current,
    display,
    output,
    limit,
    zero,
    period,
    operator;

  display = document.getElementById("result");

  var elem = document.querySelectorAll(".btn"); //selector css
  console.log("nodo selecionado document querySelectorAll ");
  console.log(elem);
  var len = elem.length; // longitud para recorrer el nodo, ya que son los elementos que la componen de modo en aparicion
  console.log("longitu de len "+len);
  for (var i = 0; i < len; i++) {
    elem[i].addEventListener("click", function() {
      console.log("valor de i en bucle for "+i); // el valor de i siempre sera la longitud total del nodo
      num = this.value;
      console.log(num);
      output = display.innerHTML += num;
      console.log(output);
      limit = output.length;
      console.log(limit);
      if (limit >= 12) {
        alert("no puedes añadir mas de 12 digitos");
      }
    }, false);
  }


}
