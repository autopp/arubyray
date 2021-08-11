export type TupleToTupleOfArray<T extends unknown[]> = {
  [I in keyof T]: readonly T[I][]
}
