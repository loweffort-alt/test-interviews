// Escribir una funcion q cuente la cantidad de veces q se repite una palabra

function count(str) {
  const input = str.split(" ");
  console.log(input);
  input.reduce((acc, el) => {
    acc.find(el)
    console.log(acc)
    return acc
  }, [])
  //return input
}

module.exports = {
  count,
}