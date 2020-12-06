function getCopyObj(obj) {
    for (let prop in obj) {
      if (typeof obj[prop] !== "string") {
        if (typeof obj[prop] === "boolean") {
          if (obj[prop] === true) {
            obj[prop] = 1;
          } else {
            obj[prop] = 0;
          }
        }
      } else {
        obj[prop] = obj[prop].length;
      }
    }
    return obj;
  }
  const transport = {
    bmw: "auto",
    audi: "auto",
    bugatti: "motorcycle",
    "bmw-price": 5000,
    "audi-price": 8000,
    "bmw-bike": false,
    "bmw-bicycle": true,
  };
  
  console.log(getCopyObj(transport));