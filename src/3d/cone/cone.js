/**
 * 050 ������ �ѳ���
 * 
 * @author: Naesung
 * @param {number} r
 * @param {number} h
 * @return {number} The surface area of cone
 * 
 */
export function coneArea(r, h) {
    return (((Math.PI) * r * (((r ** 2) + (h ** 2)) ** 0.5)) + ((Math.PI) * (r ** 2)))
}
/**
 * 049 ������ ����
 * 
 * @author: Naesung
 * @param {number} r
 * @param {number} h
 * @return {number} The volume of cone
 * 
 */
export function coneVolume(r, h) {
    return ((1 / 3) * (Math.PI) * (r ** 2) * h)
}
