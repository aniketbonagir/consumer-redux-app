export const convertToGermanFormat = (num) => {
    return num.toLocaleString('de-DE', {
        minimumFractionDigits: 2,
        style: 'currency', 
        currency: 'EUR'
    })
}

export const isNumeric = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
}