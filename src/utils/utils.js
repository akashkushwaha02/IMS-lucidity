export const formatNumber = (number) => {
    const validNumber = Number(number);
    if (isNaN(validNumber)) {
        return console.log('Invalid number')
    }
    return new Intl.NumberFormat('en-US').format(validNumber);
};
