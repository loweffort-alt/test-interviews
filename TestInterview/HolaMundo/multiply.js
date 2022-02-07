//Multiplicar 2 numeros sin usar el operador multiplicar

function multiply(a, b) {
  if (typeof(a) != "number" || typeof(b) != "number") {
    console.log("Only numbers allowed");
    return "Only numbers allowed";
  };
  let init = 0;
  const positive = Math.abs(b) == b; //Devuelve booleano
  for(i=0; i<Math.abs(b); i++) {
    init = positive ? init + a : init - a
  };
  return init;
};

module.exports = {
  multiply,
}