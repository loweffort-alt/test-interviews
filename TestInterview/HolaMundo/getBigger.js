//Sacar el valor mayor de un array en una sola iteración

function getBigger(arr) {
  if (typeof(arr) != "object") {
    console.log("Only array allowed");
  };

  const bigger = arr.reduce((acc, el) => {
    if (typeof(el) != "number") {
      return false;
    };
    const absAcc = Math.abs(acc);
    const absEl = Math.abs(el);
    return absAcc < absEl ? acc : acc = el
  });
  console.log(bigger)
  return bigger;
}

module.exports = {
  getBigger,
}