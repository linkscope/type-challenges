type TupleToObject<T extends readonly (number | string | symbol)[]> = {
  // 遍历数组
  [P in T[number]]: P
}
