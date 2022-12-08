const { calcTip, add } = require('../src/math')

test('should calculate total with tip', () => {
    const total = calcTip(10, 0.30)

    expect(total).toBe(13)
})

test('should calculate total with default tip', () => {
    const total = calcTip(10)

    expect(total).toBe(12)
})

// test('async test demo', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(2)
//         done()
//     }, 2000);
// })

test('should add two numbers', (done) => {
    add(2, 3).then(sum => {
        expect(sum).toBe(5)
        done()
    })
})

test('should add two numbers async/await', async () => {
    const sum = await add(33, 44)
    expect(sum).toBe(77)
})