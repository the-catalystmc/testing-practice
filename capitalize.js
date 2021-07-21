const capitalize = (str) => {
    let newStr = str.toLowerCase();
    newStr = newStr.charAt(0).toUpperCase() + newStr.slice(1);
    return newStr
}

module.exports = capitalize;