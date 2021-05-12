/**
 * 212 diff
 * 
 * @author: DPS0340, Choi Minseo
 * @param {string} f
 * @return {number} Diff
 * 
 */
export function diff(f, density = 5) {
    let dx = 2 * (10 ** (-density))
    let dy = (x) => f(x + (10 ** (-density))) - f(x - (10 ** (-density)))

    return (x) => dy(x) / dx
}
/**
 * 213 ����
 * 
 * @author: DPS0340, Choi Minseo
 * @param {string} f
 * @return {number} Integral
 * 
 */
export function integral(f, density = 5) {
    let g = (a, b) => {
        let sum = 0
        for (let k = a; k < b; k += 10 ** (-density)) {
            sum += (f(k + 10 ** (-density)) + f(k)) / 2 * 10 ** (-density)
        }
        return sum
    }

    return g
}
