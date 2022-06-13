// 确保泛型K能够在泛型T中找到对应key
type MyPick<T, K extends keyof T> = {
  // 将遍历K的值泛型P放入K中
  [P in K]: T[P]
}
