type Chainable<Value = {}> = {
  option<K extends string, V>(key: K extends keyof Value ? never : K, value: V): Chainable<{ [k in K]: V } & Value>
  get(): Value
}
