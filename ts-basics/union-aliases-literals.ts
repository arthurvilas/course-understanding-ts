// alliases
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'; // Union of Literal Types

// should work with numbers and strings
function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
) {
    // let result = input1 + input2; ERROR - TS will not allow + operator with union types
    // we need to runtime checks to make sure the operations involve the same type (not always!!!!)
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return resultConversion === 'as-number' ? +result : result.toString();
}

const combinedAges = combine(10, 30, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('10', '30', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('john', 'nathan', 'as-text');
console.log(combinedNames);
