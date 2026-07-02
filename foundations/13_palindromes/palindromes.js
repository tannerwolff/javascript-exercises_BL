const palindromes = function (str) {
  const reg = /[^a-z0-9]/g;
  let cleaned = str.toLowerCase().replace(reg, "");
  let mods = cleaned.split("").reverse().join("");
  if (mods === cleaned) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
