/**
 * 082A �������� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} d
 * @param {number} n
 * @return {number} Arithmetic progression
 
 */
export function arithmeticProgression(a, d, n) {
    return (a + (n - 1) * d)
}

/**
 * 082B �������� ����
 * 
 * @author: Choi Minseo
 * @param {number} d
 * @param {number} n
 * @param {number} s
 * @return {number} Arithmetic progression
 
 */
export function arithmeticProgression_n(d, n, s) {
    return (s - (n - 1) * d)
}

/**
 * 082C �������� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} n
 * @param {number} s
 * @return {number} Arithmetic progression
 
 */
export function arithmeticProgression_d(a, n, s) {
    return ((s - a) / (n - 1))
}

/**
 * 083A ���������� �� ����
 * 
 * @author: Choi Minseo
 * @param {number} a1
 * @param {number} an
 * @param {number} n
 * @return {number} Arithmetic progression
 
 */
export function arithmeticProgressionSum_Term(a1, an, n) {
    return (((a1 + an) / 2) * n)
}

/**
 * 083B ���������� �� ����
 * 
 * @author: Choi Minseo
 * @param {number} a1
 * @param {number} n
 * @param {number} d
 * @return {number} Arithmetic progression
 
 */
export function arithmeticProgressionSum(a1, n, d) {
    return ((((2 * a1) + ((n - 1) * d)) / 2) * n)
}

/**
 * 084A ������ ����
 * 
 * @author: Choi Minseo
 * @param {number} an
 * @param {number} n
 * @param {number} r
 * @return {number} Geometric progression
 
 */
export function geometricProgression_a(an, n, r) {
    return (an / (r ** n))
}

/**
 * 084B ������ ����
 * 
 * @author: Choi Minseo
 * @param {number} an
 * @param {number} a
 * @param {number} r
 * @return {number} Geometric progression
 
 */
export function geometricProgression_n(an, a, r) {
    return Math.log(an / a) / Math.log(r)
}

/**
 * 084C ������ ����
 * 
 * @author: Choi Minseo
 * @param {number} an
 * @param {number} a
 * @param {number} n
 * @return {number} Geometric progression
 
 */
export function geometricProgress_r(an, a, n) {
    return ((an / a) ** (1 / n))
}

/**
 * 084D ������ ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} n
 * @param {number} r
 * @return {number} Geometric progression
 
 */
export function geometricProgression_an(a, n, r) {
    return (a * (r ** n))
}

/**
 * 085 등비수열의 합 공식
 * 
 * @author: Choi Minseo
 * @param {number} a 
 * @param {number} r
 * @param {number} n
 * @return {number} Sum of geometric progression 
 */
export function geometricProgressionSum(a, r, n) {
    return a * (1 - (r**n)) / (1 - r)
}

/**
 * 086 무한등비수열의 합
 * 
 * @author: Choi Minseo
 * @param {number} a 
 * @param {number} r
 * @return {number} Sum of infinite geometric progression
 */
export function geometricProgressionInfinitySum(a, r) {
    return a / (1 - r)
}

/**
 * 088.1 연속된 수로 구성된 수열의 합
 * 
 * @author: Choi Minseo
 * @param {number} n 
 * @param {number} k 
 * @return {number} Sum of progress which number is consisted of consecutive numbers
 */
export function sigma(n, k) {
    return (((1 / 2) * n * (n + 1)) - ((1 / 2) * k * (k + 1)))
}

/**
 * 088.2 제곱인 수로 구성된 수열의 합
 * 
 * @author: Choi Minseo
 * @param {number} n 
 * @param {number} k 
 * @return {number} Sum of progress which number is consisted of the squares of numbers 
 */
export function sigmaSquare(n, k) {
    return (((1 / 6) * n * (n + 1) * ((2 * n) + 1)) - ((1 / 6) * k * (k + 1) * ((2 * k) + 1)))
}

/**
 * 088.3 세제곱인 수로 구성된 수열의 합
 * 
 * @author: Choi Minseo
 * @param {number} n 
 * @param {number} k 
 * @return {number} Sum of progress which number is consisted of the cubic number 
 */
export function sigmaCube(n, k)  {
    return (((1 / 4) * (n ** 2) * ((n + 1) ** 2)) - ((1 / 4) * (k ** 2) * ((k + 1) ** 2)))
}

/**
 * 089.1 무한급수(분모가 n!이고 분자가 x의 k제곱)
 * @param {number} x 
 * @return {number} Infinite series (the denominator is n! and the numerator is x to the power of k)
 */
export function infiniteSeries_1(x) {
    return (Math.E ** x)
}

/**
 * 089.2 무한급수(분모가 n!이고 분자가 k 곱하기 x의 k제곱)
 * @param {number} x 
 * @return {number} Infinite series (The denominator is n! and the numerator is k times x to the power of k)
 */
export function infiniteSeries_2(x) {
    return (x * (Math.E ** x))
}

/**
 * 089.3 무한급수(x의 k제곱, |x| < 1)
 * @param {number} x 
 * @return {number} Infinite series (x to the power of k, |x| < 1)
 */
export function infiniteSeries_3(x) {
    if (x > 1 || x < -1 || x == 1 || x == -1) {
        console.log('Check |x| < 1')
    }
    else {
        return (1 / (1 - x))
    }
}

/**
 * 089.4 무한급수(k 곱하기 x의 k제곱, |x| < 1)
 * @param {number} x 
 * @return {number} Infinite series (k times x to the power of k, |x| < 1)
 */
export function infiniteSeries_4(x) {
    if (x > 1 || x < -1 || x == 1 || x == -1) {
        console.log('Check |x| < 1')
    }
    else {
        return (x / ((1 - x) ** 2))
    }
}

/**
 * 202.1 ���Ϸ� �޼�
 * 
 * @author: Choi Minseo
 * @param {number} f
 * @param {number} a
 * @param {number} count
 * @return Taylor series
 * 
 */
export function taylor(f, a, count) {
    let diffs = [(x) => f(a)]
    let taylors = []
    let fact = [1]

    function diff(fun, density = 5) {
        const dx = 2 * (10 ** -density)
        const dy = (x) => fun(x + (10 ** -density)) - fun(x - (10 ** -density))
        return (x) => dy(x) / dx
    }

    taylors.push((x) => diffs[0](x))

    for (let i = 1; i <= count; i++) {
        diffs.push(diff(diffs[i - 1]))
        let factorial = 1
        for (let j = 1; j <= i; j++) {
            factorial *= j
        }
        fact.push(factorial)

        taylors.push(
            function (x) {
                return diffs[i](a) / fact[i] * ((x - a) ** i)
            }
        )
    }

    function res(x) {
        // eslint-disable-next-line no-undef
        result = 0
        for (let i = 0; i <= count; i++) {
            // eslint-disable-next-line no-undef
            result += taylors[i](x)
        }
        // eslint-disable-next-line no-undef
        return result
    }

    return res
}
/**
 * 202.2 ��Ŭ�θ� �޼�
 * 
 * @author: DPS0340
 * @param {number} f
 * @param {number} count
 * @return {number} Maclaurin series
 * 
 */
export function maclaurin(f, count) {
    return exports.taylor(f, 0, count)
}
