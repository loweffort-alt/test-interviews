//Limpiar el array/object dado

function clean(arr) {
  const cleaned = arr.reduce((acc, el) => {
    el ? acc.push(el) : false;
    //es super importante retornar el acumulador para evaluar el .push
    //console.log(acc)
    return acc
  }, [])
  //console.log(cleaned)
  return cleaned 
}

module.exports = {
  clean,
}