/**
 *  903 ACORN
 * Generates Random Value with ACORN Algorithm:
 * Which is Better, Faster, Simpler than Standard JS PRNG Implementation.
 *  
 * @author: DPS0340
 * @return {random}
 * 
 */
export function ACORN(seed = new Date().getTime(), moduloPower = 60, order = 10) {
    let M = 2 ** moduloPower

    let temp = 0 + (seed.toString().split('').reverse().join(''))
    seed = seed * temp

    function oddorplusone(n) {
        if (n % 2 === 1) {
            return n
        } else {
            return n + 1
        }
    }

    seed = oddorplusone(seed % M)

    let seed2 = (seed + 2) % M

    const go = function (m, n) {
        if (m === 0) {
            return seed
        } else if (n === 0) {
            return seed2
        } else {
            return (go(m - 1, n) + (m, n - 1)) % M
        }
    }

    let xk = go(order, order)

    return xk / M
}
/**
 * 201 ���� ���
 * 
 * @author: DPS0340
 * @param {number} f
 * @param {number} count
 * @param {number} initx
 * @return Newton's method
 * 
 */
export function newtonsMethod(f, count, initx = 2) {
    function diff(f, x, density = 5) {
        const dx = 2 * (10 ** -density)
        const dy = f(x + (10 ** -density)) - f(x - (10 ** -density))
        return dy / dx
    }

    function newtonGo(f, x, go = 0) {
        const next = x - f(x) / diff(f, x)
        if (go === count - 1) {
            return next
        }
        return newtonGo(f, next, go + 1)
    }

    return newtonGo(f, initx, 0)
}
