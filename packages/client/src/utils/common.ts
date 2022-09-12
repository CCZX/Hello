/**
 * 生成随机数
 * @param min
 * @param max
 * @returns
 */
export function genRandom(min: number = 0, max: number = 10) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function genRandomAvatar() {
  return `/${genRandom(0, 13)}.png`;
}
