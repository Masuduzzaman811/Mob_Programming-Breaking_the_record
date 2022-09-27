function breakingRecords(scores) {
  let maximum = scores[0];
  let minimum = scores[0];
  let min = 0;
  let max = 0;
  for (let i = 0 ; i < scores.length ; i+=1) {
      if( scores[i] < minimum) {
          minimum = scores[i];
          min += 1;
      } else if( scores[i] > maximum) {
          maximum = scores[i];
          max += 1;
      }
  }
  return [max,min];

}