//Aplanar los arreglos en el orden de 1

const getFlatten = (arr) => {
  const flated = arr.reduce((acc, el) => acc.concat(el), []);
  //console.log(flated);
  return flated;
};

module.exports = {
  getFlatten,
}