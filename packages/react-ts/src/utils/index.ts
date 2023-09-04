/**
 *
 * @param n 返回随机数长度
 * @returns 随机n位字符串
 */
export function uuid(n = 8): string {
	const uuid: string[] = [];
	const chars =
	  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const charsLength = chars.length;
	for (let i = 0; i < n; i++) {
	  uuid.push(chars.charAt(Math.floor(Math.random() * charsLength)));
	}
	return uuid.join("");
  }
  