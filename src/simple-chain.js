const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength: function () { // возвращает длину цепи в виде числа
    return this.chain.length;
  },
  addLink: function (value) { // добавляет строку в цепь. Если нет аргумента добавить ( )
    let link = '( )';
    if (value === undefined) {} else {
      link = '( ' + value + ' )';
    }
    this.chain.push(link);
    return this;
  },
  reverseChain() { // переворачивает цепь
    let reverseElement;
    for (reverseElement of this.chain.reverse()) {

    }
    return this;
  },
  removeLink: function (position) { // удаляет УКАЗАНОЕ звено в цепи. Если аргумент не целое число нужно кинуть ошибку
    if (position < 1 || position > this.getLength() || typeof (position) !== "number") {
      this.chain = [];
      throw Error;
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  finishChain: function () { // заканчивает цепь и возвращает её
    let result = this.chain.join(`~~`);
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;