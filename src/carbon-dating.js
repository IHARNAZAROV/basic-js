const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity != 'string')
    return false;
 
  sampleActivity = Number.parseFloat(sampleActivity);
  if (!sampleActivity || sampleActivity > MODERN_ACTIVITY || sampleActivity <= 0)
    return false;

  let result = HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY / sampleActivity) / 0.693;
  return Math.ceil(result);
};