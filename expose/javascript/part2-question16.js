for (const prop in statistics) {
  if(prop[0] == 'r') console.log(statistics[prop]);
  else if(statistics[prop] % 2 != 0) console.log(statistics[prop]);
}
