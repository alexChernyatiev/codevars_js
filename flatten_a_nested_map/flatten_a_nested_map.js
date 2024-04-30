function flattenMap(map) {
  const array = {};
    const path = "";
    flattenMap1(map, array, path)
    return array;
}

const flattenMap1 = (map, array, path) => {
  for(const prop in map) {
    const newPath = !path ? path + prop : path + "/" + prop;
    if(map[prop] instanceof Object && !Array.isArray(map[prop])) {
      flattenMap1(map[prop], array, newPath)
    } else {
      array[newPath] = map[prop];
    }
  }
}