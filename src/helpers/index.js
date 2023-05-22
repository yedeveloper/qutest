/**
 * Format a number with points and commas
 * @param {number} number 
 * @returns Number formatted. Example: 1.234,45
 */
const formatNumber = number => {
    const formatted = isNaN(number) ? number : new Intl.NumberFormat('de-DE').format(number);
    return formatted;
}

/**
 * Capitalize the first letter of a string
 * @param {string} inputString 
 * @returns The string with the first letter capitalized
 */
const capitalizeFirstLetter = inputString => {
    if (typeof inputString === 'string') 
        inputString = inputString.charAt(0).toUpperCase() + inputString.slice(1);
    return inputString;
}

/**
 * Order array by property
 * @param {array} array 
 * @param {string} property 
 * @returns Array ordered according to property used
 */
const orderArrayByProperty = (array, property) => {
    const copyArray = [...array];
    if (property === 'name') {
        copyArray.sort((a, b) => a[property].localeCompare(b[property]));
    } else {
        copyArray.sort((a, b) => {
            if(isNaN(parseFloat(a[property]))) return 0;
            if(parseFloat(a[property]) < parseFloat(b[property])) return -1;
            if(parseFloat(a[property]) > parseFloat(b[property])) return 1;
            return 0;
        });
    }
    return copyArray;
}

export {
    formatNumber,
    capitalizeFirstLetter,
    orderArrayByProperty
};