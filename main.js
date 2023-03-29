function descendingOrder(n){
  let array = [];
  let splitt = n.toString();
  for (let i = 0; i < splitt; i++) {
    let value = splitt[0];
    array.push(value);
  }
  for (let i = 0; i < array; i++) {
    let array2 = [];
    let value1 = array[i];
    let maxnumber = 0;
    if (value1 > maxnumber && !(maxnumber in array)) {
        maxnumber = value1;
        array2.push(maxnumber);
        }
  return array2;
  }
}