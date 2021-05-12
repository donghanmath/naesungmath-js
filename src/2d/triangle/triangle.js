/**
 * 004 ��Ÿ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} The length of the hypotenuse when each side is a, b in a right triangle
 * 
 */
 export function pytagoras(a, b) {
    return ((a * a + b * b) ** 0.5)
}

/**
 * 008 ���� �ﰢ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} t
 * @return {number} Area of triangle using angle
 * 
 */
export function triangleAreaAngle(a, b, t) {
    return (0.5 * a * b * (Math.sin(t)))
}
/**
 * 003 �����ﰢ���� ����
 *  
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} Area of right triangle with each side a and b
 * 
 */
export function rtria(a, b) {
    return (0.5 * a * b)
}
/**
 * 005 �̵�ﰢ���� ����
 *  
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} The length of an isosceles triangle with equal side a and base b
 * 
 */
export function quadtria(a, b) {
    return (a / 4 * (4 * b * b - a * a) ** 0.5)
}

/**
 * 006 ����� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number} Heron's formula
 * 
 */
export function heron(a, b, c) {
    let cosTheta = ((a * a) + (b * b) - (c * c)) / (2 * a * b)
    let sinTheta = Math.sqrt(1 - (cosTheta ** 2))
    return (a * b * sinTheta) / 2
}/**
 * 013 �����߽� ����
 * 
 * @author: Choi Minseo
 * @param {number} a1
 * @param {number} a2
 * @param {number} b1
 * @param {number} b2
 * @param {number} c1
 * @param {number} c2
 * @return {number} The center of gravity of the triangle using the coordinates of the vertices
 * 
 
/**
 * 013 �����߽� ����
 * 
 * @author: Choi Minseo
 * @param {number} a1
 * @param {number} a2
 * @param {number} b1
 * @param {number} b2
 * @param {number} c1
 * @param {number} c2
 * @return {number} The center of gravity of the triangle using the coordinates of the vertices
 * 
 */
export function centerGravity(a1, a2, b1, b2, c1, c2) {
    return ((a1 + b1 + c1) / 3)((a2 + b2 + c2) / 3)
}
/**
 * 001 ���ﰢ���� ����
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} a plus b
 * 
 */
export function equilateralTriangleArea(a) {
    return 3 ** 0.5 / 4 * a * a
}
/**
 * 002 ���ﰢ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} a plus b
 * 
 */
export function equilateralTriangleHeight(a) {
    return (3 ^ 0.5 / 2 * a)
}
