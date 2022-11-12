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

const doWork = async () => {
    const sum = await add(1, 2)
    console.log(sum);
    const sum2 = await add(sum, 5)
    console.log(sum2);
    const sum3 = await add(sum2, +7)
    console.log(sum3);
    return 'sum3'
}

// console.log('me', doWork());

doWork().then((result) => {
    console.log('result', result);
}).catch((e) => {
    console.log('e', e);
})

//  console.log(doWork());
