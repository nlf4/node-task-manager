const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math')

// test('Hello Mars', ()=> {

// })


// test('This should fail', ()=> {
//     throw new Error('failure')
// })

test('Should calculate total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)

    // if (total !== 13) {
    //     throw new Error('Ttoal tip should equal 13. Got ' + total)
    // }
})

test('Should calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)

})

test('Should convert F to C', () => {
    const temp = fahrenheitToCelsius(32)
    expect(temp).toBe(0)

})

test('Should convert C to F', () => {
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32)

})