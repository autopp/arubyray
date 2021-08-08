export type TupleToTupleOfArray<T extends readonly unknown[]> = {
  [I in keyof T]: readonly T[I][]
}
