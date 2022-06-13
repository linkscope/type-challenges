type TupleToObject<T extends readonly any[]> = {
  // 遍历数组
  [P in T[number]]: P
}
