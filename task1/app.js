function getLengthOfStrings(obj) {
    let sum = 0;
    for (let prop in obj) {
      if (typeof obj[prop] === "string") {
        sum += obj[prop].length;
      }
    }
    return sum;
  }
  
  const transport = {
    bmw: "auto",
    audi: "auto",
    bugatti: "motorcycle",
    "bmw-price": 5000,
    "audi-price": 8000,
  };
  
  console.log(getLengthOfStrings(transport));