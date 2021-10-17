/**
 * 222 IdentityMatrix
 *
 * @author: DPS0340, Choi Minseo
 * @param {string} n
 * @return {number} IdentityMatrix
 *
 */
export function IdentityMatrix (n) {
  const res = []
  for (let i = 0; i < n; i++) {
    res.push([])
    for (let j = 0; j < n; j++) {
      if (i === j) {
        res[i].push(1)
      } else {
        res[i].push(0)
      }
    }
  }
  return res
}
