function generateRp(value){
    let valueStr = String(value).split('').reverse().join('')
    let newValue = '';
    for(let i = 0; i < valueStr.length; i++) {
        newValue += valueStr[i];
        if ((i+1) % 3 == 0 && i != valueStr.length - 1) {
            newValue += '.'
        }
    }
    newValue = newValue.split('').reverse().join('')
    return `Rp.${newValue}`
}

module.exports = generateRp
