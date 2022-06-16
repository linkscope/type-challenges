// 联合类型默认是可以进行遍历的 T与U会逐个遍历判断内部元素是否相等
type MyExclude<T, U> = T extends U ? never : T
