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
export function centerGravity (a1, a2, b1, b2, c1, c2) {
  return ((a1 + b1 + c1) / 3)((a2 + b2 + c2) / 3)
}
