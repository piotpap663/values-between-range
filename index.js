module.exports = function values_between_range(min, max, howMany = 3, precision = 1) {
  if (typeof max !== 'number' || typeof min !== 'number' || typeof howMany !== 'number' || (precision && typeof precision !== 'number')) {
    throw Error('Incorrect type of argument');
  } else if (min >= max) {
    throw Error(`min >= max ${min}, ${max}`);
  } else if (howMany < 0 || precision < 0) {
    throw Error('Value can not be lower than 0');
  } else if (howMany <= 2) {
    throw Error(`howMany must be grater than 2. It's ${howMany}`);
  }
  const adder = (max - min) / (howMany - 1);
  const tab = [];
  for (let i = 0; i < howMany; i += 1) {
    let num = min + (adder * i);
    if (typeof precision === 'number' && precision >= 0) {
      num = num.toFixed(precision)
    }
    tab.push(num);
  }
  return tab;
}