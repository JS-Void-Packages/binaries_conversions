# binaries conversions
Binaries Conversions is a tool that let you convert numbers to binary, hexadecimal, octal and vice versa.
# Example
```js
const { HexToBinary, BinaryToDecimal, OctalToHex, DecimalToOctal } = require('./index');

let n1 = '4F';
let n2 = '0111';
let n3 = '882';
let n4 = 50;

// convert hex to binary
console.log(HexToBinary(n1));

// convert binary to decimal
console.log(BinaryToDecimal(n2));

// convert octal to hex
console.log(OctalToHex(n3));

// convert decimal to octal
console.log(DecimalToOctal(n4));
```