function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < result.length; i++) {
      if (result[i - 1].year < result[i].year) {
        done = false;
        let temp = result[i - 1];
        result[i - 1] = result[i];
        result[i] = temp;
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
