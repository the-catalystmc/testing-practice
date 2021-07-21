const capitalize = require('./capitalize')

test('Capitalize', () => {
    expect(capitalize('ALIbaBa')).toBe('Alibaba');
})