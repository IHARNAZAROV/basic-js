const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let name = '';

  if (!(members instanceof Array)) {
    return false;
  }

  for (let i = 0; i < members.length; i += 1) {
    if (typeof members[i] === 'string') {
      name = name + members[i].trim().charAt(0).toUpperCase();
    };

  };
  let dreamteam = name.split('').sort().join('');
  return dreamteam;

};