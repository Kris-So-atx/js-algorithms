function validatePIN (pin) {
    return (pin.length === 4 || pin.length === 6) && pin.split('').every(el => !isNaN(el) && el !== '\n');
}