module.exports = function repeater(str, options) {
  let temp = [];
  if (options.separator == undefined)
    options.separator = '+';
  if (options.additionSeparator == undefined)
    options.additionSeparator = '|';
  if (options.repeatTimes == undefined)
    options.repeatTimes = 0;
  if (options.additionRepeatTimes == undefined)
    options.additionRepeatTimes = 0;

  if (options.additionRepeatTimes == 0 && options.addition != undefined) {
    temp += str;
    temp += options.addition;
  }

  for (let a = 0; a < options.repeatTimes; a += 1) {
    temp += str;

    for (let b = 0; b < options.additionRepeatTimes; b += 1) {
      temp += options.addition;
      if (b < options.additionRepeatTimes - 1) {
        temp += options.additionSeparator;
      }
    }

    if (a < options.repeatTimes - 1) {
      temp += options.separator;
    }
  }
  return temp;
};