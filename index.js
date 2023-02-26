/**
 * @param {string} n 
 */
function HexToDecimal(n) {
    return parseInt(n, 16);
}

/**
 * @param {string} n 
 */
function HexToOctal(n) {
    return parseInt(n, 16).toString(8);
}

/**
 * @param {string} n 
 */
function HexToBinary(n) {
    return parseInt(n, 16).toString(2);
}

/**
 * @param {string} n 
 */
function OctalToDecimal(n) {
    return parseInt(n, 8);
}

/**
 * @param {string} n 
 */
function OctalToBinary(n) {
    return parseInt(n, 8).toString(2);
}

/**
 * @param {string} n 
 */
function OctalToHex(n) {
    return parseInt(n, 8).toString(16);
}

/**
 * @param {string} n 
 */
function BinaryToDecimal(n) {
    return parseInt(n, 2);
}

/**
 * @param {string} n 
 */
function BinaryToOctal(n) {
    return parseInt(n, 2).toString(8);
}

/**
 * @param {string} n 
 */
function BinaryToHex(n) {
    return parseInt(n, 2).toString(16);
}

/**
 * @param {number} n 
 */
function DecimalToOctal(n) {
    return n.toString(8);
}

/**
 * @param {number} n 
 */
function DecimalToBinary(n) {
    return n.toString(2);
}

/**
 * @param {number} n 
 */
function DecimalToHex(n) {
    return n.toString(16);
}

module.exports = {
    HexToDecimal,
    HexToBinary,
    HexToOctal,
    BinaryToDecimal,
    BinaryToHex,
    BinaryToOctal,
    OctalToDecimal,
    OctalToBinary,
    OctalToHex,
    DecimalToBinary,
    DecimalToHex,
    DecimalToOctal
}