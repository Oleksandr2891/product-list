export const sortArrey = (arr) => {
  return arr.reduce(function (obj, item) {
    const key = item.id;
    if (!obj.hasOwnProperty(key)) {
      obj[key] = [];
    }
    obj[key].push(item.price);
    return obj;
  }, {});
};
