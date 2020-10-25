module.exports = function towelSort(matrix) {

  if (!arguments.length || !matrix.length)
  {
    return [];
  }
   
  const newArrr = (value, index) => {
      if (index % 2)
      {
        return value.reverse();
      }
      return value;
  };

  return matrix.map(newArrr).flat();
};         
