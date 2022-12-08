const calcTip = (total, tipPercent = 0.2) => {
    const tip = total * tipPercent
    return total + tip
}

const add = (a, b) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                rej('numbers must be positive!')
            }
            res(a + b)
        }, 2000);
    })
}

module.exports = {
    calcTip, 
    add
}