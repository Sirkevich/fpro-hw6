function getCopyObjProp(obj) {
  for (let prop in obj) {
    obj[prop] = "";
  }
  return obj;
}

const transport = {
  bmw: "auto",
  audi: "auto",
  bugatti: "motorcycle",
  "bmw-price": 5000,
  "audi-price": 8000,
};
 
console.log(getCopyObjProp(transport));
