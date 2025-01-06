const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    str = String(str);
    let addition = options.addition !== undefined ? String(options.addition) : '';

    const repeatTimes = options.repeatTimes || 1;
    const separator = options.separator || '+';
    const additionRepeatTimes = options.additionRepeatTimes || 1;
    const additionSeparator = options.additionSeparator || '|';

    const additionString = Array(additionRepeatTimes)
        .fill(addition)
        .join(additionSeparator);

    const resultString = Array(repeatTimes)
        .fill(str + additionString)
        .join(separator);

    return resultString;
}

module.exports = {
  repeater
};
