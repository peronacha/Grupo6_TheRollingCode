var numeroCuadroActual = 0;
var usandoBotones = false;

function mostrarAnterior(){
  mostrarCuadroNumero(numeroCuadroActual-1);
}
function mostrarSiguiente(){
  mostrarCuadroNumero(numeroCuadroActual+1);
}

function pausarAnimacion(){
  usandoBotones=true;
}

function reactivarAnimacion(){
  usandoBotones=false;
}

function autoAnimarSlider(){
  setInterval(function(){if(!usandoBotones){mostrarSiguiente()}}, 2000);
}

function mostrarCuadroNumero(numeroIndicado) {

  var elementosCuadros = document.querySelectorAll(".cuadroSliderOculto, .cuadroSliderVisible");
  var cantidadCuadros = elementosCuadros.length;

  if (numeroIndicado >= cantidadCuadros){
    numeroCuadroActual = 0; // Si se pasa, lo reinicia
  } else if (numeroIndicado < 0){
    numeroCuadroActual = cantidadCuadros; // Si pasa del primero hacia atrás, toma el último.
  } else{
    numeroCuadroActual = numeroIndicado;
  }

  for (cuadro of elementosCuadros) {
      cuadro.classList.remove("cuadroSliderVisible");
      cuadro.classList.add("cuadroSliderOculto");
  }
  elementosCuadros[numeroCuadroActual].classList.remove("cuadroSliderOculto");
  elementosCuadros[numeroCuadroActual].classList.add("cuadroSliderVisible");
}