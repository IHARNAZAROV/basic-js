const CustomError = require("../extensions/custom-error");

const seconds = 3600; /* seconds in hour */

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  const turns = Math.pow(2, disksNumber) - 1;

  let obj = {
    turns: turns,
    seconds: Math.floor(turns / (turnsSpeed / seconds))
  };

  return obj;
};

/* Дано: 
кол-во дисков, 
скорость переноса дисков в час

Фомула:
переносы = 2 ^ кол-во дисков - 1

Вернуть:
мин кол-во переносов
мин время переносов

Решение:
время переносов (с) = кол-во переносов (шт) / скорость переносов (шт/с)
seconds (с) = turns (шт) / turnsSpeed (шт/ч) / 3600 
*/

