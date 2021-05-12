/**
 * 204 LU ���ع�
 * 
 * @author: DPS0340
 * @param {matrix} matrix
 * @return {number} LUDecompostion of matrix
 * 
 */
export function LUDecomposition(matrix) {
    if (matrix.length !== matrix[0].length) {
        console.log('��� ���� ũ�Ⱑ ���� ����')
        return
    }
    const len = matrix.length
    let L = []
    let U = []
    for (let i = 0; i < len; i++) {
        L.push([])
        U.push([])
        for (let j = 0; j < len; j++) {
            L[i].push(0)
            U[i].push(0)
        }
    }

    for (let i = 0; i < len; i++) {
        for (let k = i; k < len; k++) {
            let sum = 0
            for (let j = 0; j < i; j++) {
                sum += L[i][j] * U[j][k]
            }
            U[i][k] = matrix[i][k] - sum
        }
        for (let k = i; k < len; k++) {
            if (i === k) {
                L[i][i] = 1
            } else {
                let sum = 0
                for (let j = 0; j < i; j++) {
                    sum += L[k][j] * U[j][i]
                }
                L[k][i] = (matrix[k][i] - sum) / U[i][i]
            }
        }
    }

    return {
        Lower: L,
        Upper: U
    }
}

/**
 *  227 Cramer
 *  
 * @author: DPS0340
 * @param {string} mat
 * @return {number} Solves System of linear equations.
 * 
 */
export function Cramer(mat) {
    let B = []
    let X = []

    for (let i = 0; i < mat.length; i++) {
        B.push(mat[i][mat[0].length - 1])
    }

    let T = []

    for (let j = 0; j < mat.length; j++) {
        T.push([])
        for (let k = 0; k < mat[0].length - 1; k++) {
            T[j].push(mat[j][k])
        }
    }

    for (let i = 0; i < mat.length; i++) {
        let Ai = []
        for (let j = 0; j < mat.length; j++) {
            Ai.push([])
            for (let k = 0; k < mat[0].length - 1; k++) {
                Ai[j].push(mat[j][k])
            }
        }

        for (let j = 0; j < mat.length; j++) {
            Ai[j][i] = B[j]
        }

        X.push(exports.determinant(Ai) / exports.determinant(T))
    }

    return X
}

/**
 * 217 LQ ����
 * 
 * @author: DPS0340
 * @param {string} mat
 * @return {number} LQDecomposition
 * 
 */
export function LQDecomposition(mat, iterationCount = 1000) {
    let AT = exports.transpose(mat)

    AT = exports.QRDecomposition(AT, iterationCount)

    return {
        // eslint-disable-next-line dot-notation
        L: exports.transpose(AT['R']),
        // eslint-disable-next-line dot-notation
        Q: exports.transpose(AT['Q'])
    }
}
/**
 * 206 ��Ľ�
 * 
 * @author: DPS0340/Choi Minseo(Merged)
 * @param {matrix} matrix
 * @return {number} Determinant
 * 
 */
export function determinant(matrix) {
    if (matrix.length !== matrix[0].length) {
        return
    }
    if (matrix.length > 2) {
        let result = 0
        for (let i = 0; i < matrix[0].length; i++) {
            const K = matrix[0][i]
            let mat = []
            for (let j = 1; j < matrix.length; j++) {
                mat.push([])
                for (let k = 0; k < matrix[0].length; k++) {
                    if (k !== i) {
                        mat[j - 1].push(matrix[j][k])
                    }
                }
            }
            if (i % 2 === 0) {
                result += K * exports.determinant(mat)
            } else {
                result -= K * exports.determinant(mat)
            }
        }
        return result
    } else {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
    }
}

/**
 * 224 Durand_Kerner
 * @author: DPS0340
 * @param {string} f
 * @return {number} Finding Multiple Roots of Function.
 * 
 */
export function Durand_Kerner(f, rootsNumber = 1, iterationCount = 15) {
    let roots = []
    for (let i = 0; i < rootsNumber; i++) {
        roots.push(i + 1)
    }

    for (let k = 0; k < iterationCount; k++) {
        for (let i = 0; i < rootsNumber; i++) {
            let down = 1
            for (let j = 0; j < rootsNumber; j++) {
                if (i !== j) {
                    down *= roots[i] - roots[j]
                }
            }
            roots[i] -= f(roots[i]) / down
        }
    }

    return roots
}

/**
 * 226 Eigendecomposition
 * @author: DPS0340
 * @param {matrix} mat
 * @return {number} Eigendecomposition of a matrix.
 * 
 */
export function EigenVectorDecomposition(mat, iterationCount = 100) {
    let V = []
    for (let i = 0; i < mat[0].length; i++) {
        V.push(exports.randomVector(mat.length, 1))
    }

    V = exports.transpose(V)

    let X = []

    for (let i = 0; i < mat.length; i++) {
        X.push([])
        for (let j = 0; j < mat[0].length; j++) {
            X[i].push(mat[i][j])
        }
    }

    let QR = exports.QRDecomposition(V)

    for (let k = 0; k < iterationCount; k++) {
        // eslint-disable-next-line dot-notation
        let W = exports.matrixmultiply(X, QR['Q'])

        QR = exports.QRDecomposition(W)
    }

    // eslint-disable-next-line dot-notation
    let Q = exports.transpose(QR['Q'])

    for (let i = 0; i < Q.length; i++) {
        let min = Math.abs(Q[i][0])
        for (let j = 0; j < Q[i].length; j++) {
            if (min > Math.abs(Q[i][j])) {
                min = Math.abs(Q[i][j])
            }
        }
        for (let j = 0; j < Q[i].length; j++) {
            Q[i][j] /= min
        }
        if (Q[i][0] < 0) {
            for (let j = 0; j < Q[i].length; j++) {
                Q[i][j] *= -1
            }
        }
    }

    let res = []

    for (let i = 0; i < Q.length; i++) {
        let temp = []
        for (let j = 0; j < Q[i].length; j++) {
            temp.push([])
            temp[j].push(Q[i][j])
        }
        let temp2 = exports.matrixmultiply(X, temp)
        for (let j = 0; j < Q[i].length; j++) {
            if (((temp2[j][0] === 0) || isNaN(temp2[j][0])) && !res.includes(0)) {
                res.push(0)
                break
            } else if (Q[i][j] !== 0) {
                res.push(temp2[j][0] / Q[i][j])
                break
            }
        }
    }

    for (let i = 0; i < Q.length; i++) {
        for (let j = 0; j < Q[0].length; j++) {
            if (isNaN(Q[i][j])) {
                Q[i][j] = 0
            }
        }
    }

    res = res.filter((x) => x !== undefined)

    return {
        Q: Q,
        eigenvalue: res
    }
}

/**
 * 207 ���콺 �ҰŹ�
 * 
 * @author: DPS0340
 * @param {matrix} matrix
 * @param {number} m
 * @param {nmuber} n
 * @return {number} Gaussian elimination
 * 
 */
export function gaussian(matrix, m, n) {
    let X = []
    for (let i = 0; i < matrix.length; i++) {
        X.push([])
        for (let j = 0; j < matrix[i].length; j++) {
            X[i].push(matrix[i][j])
        }
    }

    for (let i = 0; i < n; i++) {
        let k = X[i][i]
        for (let j = 0; j < m; j++) {
            X[i][j] /= k
        }
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                let ratio = X[j][i]
                for (let l = 0; l < matrix[j].length; l++) {
                    X[j][l] -= ratio * X[i][l]
                }
            }
        }
    }

    return X
}

/**
 * 223 Gauss–Seidel method
 * @author: DPS0340
 * @param {number} a
 * @param {number} b
 * @return {number} Gauss–Seidel method.
 * 
 */
export function Gauss_Seidel(mat, iterationCount = 15) {
    let x = []

    for (let i = 0; i < mat.length; i++) {
        x.push(1)
    }

    for (let k = 0; k < iterationCount; k++) {
        for (let i = 0; i < mat.length; i++) {
            let n = 0
            for (let j = 0; j < mat.length; j++) {
                if (j !== i) {
                    n += mat[i][j] * x[j]
                }
            }
            x[i] = 1 / mat[i][i] * (mat[i][mat[0].length - 1] - n)
        }
    }

    return x
}

/**
 * 218 HouseHolder
 *
 * @author: DPS0340
 * @param {string} mat
 * @return {number} houseHolder
 * 
 */
export function houseHolder(mat) {
    function SG(N) {
        if (N < 0) {
            return -1
        } else {
            return 1
        }
    }
    let K = 1
    let B = []
    for (let i = 0; i < mat.length; i++) {
        B.push([])
        for (let j = 0; j < mat[0].length; j++) {
            B[i].push(mat[i][j])
        }
    }

    while (1) {
        // eslint-disable-next-line no-inner-declarations
        function s(k) {
            let res = 0
            for (let i = k + 1; i < B.length; i++) {
                res += B[i][k] ** 2
            }

            return res ** 0.5
        }
        let S = s(K - 1)
        if (S === 0) {
            K += 1
            continue
        }
        let z = 1 / 2 * (1 + SG(B[K][K - 1]) * B[K][K - 1] / S)

        let v = []

        for (let i = 0; i < K; i++) {
            v.push(0)
        }
        v.push(z ** 0.5)
        for (let i = K + 1; i < mat.length; i++) {
            v.push(SG(B[K][K - 1]) * B[K - 1][i] / (2 * v[K] * S))
        }

        v = exports.transpose([v])

        let vv = exports.matrixmultiply(v, exports.transpose(v))

        let H = exports.matrix_sub(exports.IdentityMatrix(mat.length), exports.matrix_scala_multiplation(vv, 2))

        let A = exports.matrixmultiply(exports.matrixmultiply(H, B), H)

        if (K >= B.length - 2) {
            return A
        } else {
            K += 1
            B = A
        }
    }
}

export function QRDecomposition(mat) {
    function sqrtDotProduct(row1, row2) {
        let res = 0
        for (let i = 0; i < row1.length; i++) {
            res += row1[i] * row2[i]
        }

        return res ** 0.5
    }

    function dotProduct(row1, row2) {
        let res = 0
        for (let i = 0; i < row1.length; i++) {
            res += row1[i] * row2[i]
        }

        return res
    }

    // eslint-disable-next-line no-unused-vars
    function normailze(row) {
        return exports.matrix_scala_multiplation(row, 1 / sqrtDotProduct(row, row))
    }

    function normalizeMemoi(row, K) {
        return exports.matrix_scala_multiplation(row, 1 / K)
    }

    let X = exports.transpose(mat)

    let r = []
    for (let i = 0; i < X.length; i++) {
        r.push([])
        for (let j = 0; j < X[0].length; j++) {
            r[i].push(0)
        }
    }
    let Q = []
    for (let i = 0; i < X.length; i++) {
        Q.push(0)
    }

    let k = 0

    while (1) {
        r[k][k] = sqrtDotProduct(X[k], X[k])

        Q[k] = normalizeMemoi([X[k]], r[k][k])[0]

        for (let j = k + 1; j < X.length; j++) {
            r[k][j] = dotProduct(Q[k], X[j])
        }

        for (let j = k + 1; j < X.length; j++) {
            X[j] = exports.matrix_sub([X[j]], exports.matrix_scala_multiplation([Q[k]], r[k][j]))[0]
        }

        k += 1

        if (k === X.length) {
            return {
                Q: exports.transpose(Q),
                R: r
            }
        }
    }
}

/**
 * 222 IdentityMatrix
 *
 * @author: DPS0340, Choi Minseo
 * @param {string} n
 * @return {number} IdentityMatrix
 * 
 */
export function IdentityMatrix(n) {
    let res = []
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

/**
 * 228 InverseMatrix
 *
 * @author: DPS0340, Choi Minseo
 * @param {matrix} A
 * @return {number} InverseMatrix
 * 
*/
export function InverseMatrix(A) {
    if (exports.determinant(A) === 0) {
        return null
    }
    let mat = []
    let I = exports.IdentityMatrix(A.length)
    for (let i = 0; i < A.length; i++) {
        mat.push([])
        for (let j = 0; j < A[i].length; j++) {
            mat[i].push(A[i][j])
        }
        for (let j = 0; j < I[i].length; j++) {
            mat[i].push(I[i][j])
        }
    }

    mat = exports.gaussian(mat, A.length, A[0].length)

    let res = []

    for (let i = 0; i < A.length; i++) {
        res.push([])
        for (let j = A[i].length; j < mat[i].length; j++) {
            res[i].push(mat[i][j])
        }
    }

    return res
}

/**
 * 208 ����� ����
 * 
 * @author: DPS0340/Choi Minseo(Merged)
 * @param {matrix} matrixA
 * @param {matrix} matrixB
 * @return {number} Matrix subtraction of matrixA and matrixB
 * 
 */
export function matrixAdd(matrixA, matrixB) {
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        console.log('����� ũ�� ����ġ')
        return
    }
    let result = []
    for (let i = 0; i < matrixA.length; i++) {
        result.push([])
        for (let j = 0; j < matrixA[0].length; j++) {
            result[i].push(matrixA[i][j] + matrixA[i][j])
        }
    }
    return result
}

/**
 * 203 ��İ�
 * 
 * @author: DPS0340/Choi Minseo(���Ѽ�����ȸ �ڷ� �ߺ� ����)
 * @param {matrix} matrixA
 * @param {matrix} matrixB
 * @return {matrix} Matrix product of matrixA and matrixB
 * 
 */
export function matrixMultiply(matrixA, matrixB) {
    if (matrixA[0].length !== matrixB.length) {
        console.log('�߸��� ��İ� ������ ũ��')
        return
    }
    let result = []
    for (let i = 0; i < matrixA.length; i++) {
        result.push([])
        for (let j = 0; j < matrixB[0].length; j++) {
            let sum = 0
            for (let k = 0; k < matrixB.length; k++) {
                if (!isNaN(matrixA[i][k]) && !isNaN(matrixB[k][j])) {
                    sum += matrixA[i][k] * matrixB[k][j]
                }
            }
            result[i].push(sum)
        }
    }

    return result
}

/**
 * 205 ����� ��Į���
 * 
 * @author: DPS0340/Choi Minseo(Merged)
 * @param {matrix} matrix
 * @param {number} k
 * @return {number} Matrix scalar product
 * 
 */
export function matrixScalaMultiplation(matrix, k) {
    let res = []
    for (let i = 0; i < matrix.length; i++) {
        res.push([])
        for (let j = 0; j < matrix[0].length; j++) {
            res[i].push(matrix[i][j] * k)
        }
    }

    return res
}

/**
 * 209 ����� ����
 * 
 * @author: DPS0340/Choi Minseo(Merged)
 * @param {matrix} matrixA
 * @param {matrix} matrixB
 * @return {number} Matrix sum of matrixA and matrixB
 * 
 */
export function atrixSub(matrixA, matrixB) {
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        console.log('����� ũ�� ����ġ')
        return
    }
    let result = []
    for (let i = 0; i < matrixA.length; i++) {
        result.push([])
        for (let j = 0; j < matrixA[0].length; j++) {
            result[i].push(matrixA[i][j] - matrixB[i][j])
        }
    }
    return result
}

/**
 * 215 �Ϲ�ȭ
 * 
 * @author: DPS0340
 * @param {string} row
 * @return {number} normalization
 * 
 */
export function normailze(row) {
    return exports.matrix_scala_multiplation(row, 1 / exports.sqrtDotProduct(row, row))
}

/**
 * 219 outterProduct_matrix
 *
 * @author: Choi Minseo
 * @param {matrix} u
 * @param {matrix} v
 * @return {matrix} outterProduct_matrix
 * 
 */
export function outterProduct_matrix(u, v) {
    return exports.matrixmultiply(u, exports.transpose(v))
}

/**
 * 221 SingularValueDecomposition
 *
 * @author: DPS0340, Choi Minseo
 * @param {matrix} mat
 * @return {number} SingularValueDecomposition
 * 
 */
export function SingularValueDecomposition(mat, iterationCount = 2) {
    let M = mat;
    let VT = [];
    let Sigma = [];
    let Q = [];
       for(let i=0;i<iterationCount;i++) {
           let QR = exports.QRDecomposition(M);
           console.log("QR", QR);
           Q = QR["Q"];
           let LPV = exports.LQDecomposition(QR["R"]);
           VT = LPV["Q"];
           console.log(LPV);
           Sigma = LPV["L"];
           M = Sigma;
        }
       for(let i=0;i<Sigma.length;i++) {
           M[i][i] = M[i][i]**0.5;
       }
       return {U:Q, VT: VT, Sigma:Sigma}
}

/**
 * 214 sqrtDotProduct
 * 
 * @author: DPS0340
 * @param {number} row1
 * @param {number} row2
 * @return {number} sqrtDotProduct
 * 
 */
export function sqrtDotProduct(row1, row2) {
    let res = 0
    for (let i = 0; i < row1.length; i++) {
        res += row1[i] * row2[i]
    }

    return res ** 0.5
}

/**
 * 220 trace
 *
 * @author: Choi Minseo
 * @param {matrix} 
 * @return {number} trace
 * 
 */
export function trace(matrix) {
    let res = 0
    for (let i = 0; i < matrix.length; i++) {
        res += matrix[i][i]
    }
    return res
}

/**
 * 216 ����
 * 
 * @author: DPS0340
 * @param {string} mat
 * @return {number} transpose
 * 
 */
export function transpose(mat) {
    let res = []

    for (let i = 0; i < mat[0].length; i++) {
        res.push([])
        for (let j = 0; j < mat.length; j++) {
            res[i].push(mat[j][i])
        }
    }

    return res
}
