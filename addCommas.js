function addCommas(number) {
    return number.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 20, // Allow for numbers with many decimal places
    });
}

module.exports = addCommas;